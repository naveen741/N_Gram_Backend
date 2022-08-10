import { HttpStatus } from '@nestjs/common';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  user_Name: string;
  @Field({ nullable: true })
  user_moblieNo: number;
  @Field({ nullable: true })
  user_password: string;
}
