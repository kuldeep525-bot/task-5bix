import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

  @Prop({
    required: true,
    trim: true,
    lowercase: true
  })
  name: string;

  @Prop({
    required: true,
    trim: true,
    lowercase: true
  })
  email: string;

  @Prop({
    default: 'normal'
  })
  type: string;
}

export const UserSchema = SchemaFactory.createForClass(User);