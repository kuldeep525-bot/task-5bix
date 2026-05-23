import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "src/user/schemas/user.schema";

export type PostDocuments = HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true, trim: true })
  content: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  })
  user: mongoose.Types.ObjectId;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ type: [String], default: [] })
  likesBy: string[];

  @Prop({ default: [] })
  comments: string[];
}

export const PostSchema = SchemaFactory.createForClass(Post);