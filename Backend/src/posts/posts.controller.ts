import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {

  constructor(
    private readonly postsService: PostsService
  ) {}

  @Post()
  create(
    @Body() createPostDto: CreatePostDto
  ) {
    return this.postsService.create(
      createPostDto
    );
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get('user/:id')

  findPostByUser(@Param('id') id:string)
  {
    return this.postsService.findPostByUser(id);
  }

  @Post(':id/like')

  likePost(@Param('id') id:string){
    return this.postsService.likePost(id)
  }

  @Post(':id/comment')

  addComment(@Param('id') id:string,@Body('comment') comment:string)
  {
    return this.postsService.addComment(id,comment)
  }

  @Post(':id/comment/delete')
  
deleteComment(
  @Param('id') id: string,
  @Body('index') index: number
) {
  return this.postsService.deleteComment(id, index);
}

}