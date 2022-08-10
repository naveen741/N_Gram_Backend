import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  // @Prop()
  // id: number;

  @Prop()
  user_Name: string;

  @Prop()
  user_moblieNo: number;

  @Prop()
  user_password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
