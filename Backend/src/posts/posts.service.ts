import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocuments } from './schemas/post.schema';
import { Model } from 'mongoose';

@Injectable()

export class PostsService{
  constructor(@InjectModel(Post.name) private postModel:Model<PostDocuments>){}

  async create(createPostDto:CreatePostDto)
  {
    return await this.postModel.create(createPostDto)
  }

  async findAll()
  {
    return await this.postModel.find().populate('user')
  }

  async findPostByUser(id:string){

     const posts=await this.postModel.find({user:id})

     if(posts.length===0){
    throw new NotFoundException({
      success:false,
      message:"post not found"
    })}

    return posts
  }



  // async likePost(id:string)
  // {
  //   const post=await this.postModel.findById(id)
  //    if (!post) {

  //   throw new NotFoundException(
  //     'Post not found'
  //   );
  // }

  // post.likes+=1;

  // await post.save()
  // return post;

  // }

async likePost(postId: string) {
  const post = await this.postModel.findById(postId);

  if (!post) {
    throw new NotFoundException("Post not found");
  }

  const userId = "demoUser"; // later JWT se replace hoga

  // safety check
  post.likesBy = post.likesBy || [];

  const alreadyLiked = post.likesBy.includes(userId);

  if (alreadyLiked) {
    post.likesBy = post.likesBy.filter((id) => id !== userId);
    post.likes = Math.max(0, post.likes - 1);
  } else {
    post.likesBy.push(userId);
    post.likes += 1;
  }

  await post.save();

  return {
    _id: post._id,
    likes: post.likes,
    isLiked: !alreadyLiked,
  };
}

  // async addComment(id:string,comment:string)
  // {
  //   const post=await this.postModel.findById(id);

  //     if (!post) {

  //   throw new NotFoundException(
  //     'Post not found'
  //   );
  // }

  //   post.comments.push(comment);

  // await post.save();

  // return post;


  // }

  async addComment(id: string, comment: string) {
  const post = await this.postModel.findById(id);

  if (!post) {
    throw new NotFoundException("Post not found");
  }

  post.comments = post.comments || [];

  post.comments.push(comment);

  await post.save();

  return post;
}
  
async deleteComment(postId: string, commentIndex: number) {
  const post = await this.postModel.findById(postId);

  if (!post) throw new NotFoundException('Post not found');

  post.comments.splice(commentIndex, 1);

  await post.save();

  return post;
}

}