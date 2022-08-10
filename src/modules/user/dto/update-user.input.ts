import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  id: string;
  @Field({ nullable: true })
  user_Name: string;
  @Field({ nullable: true })
  user_moblieNo: number;
  @Field({ nullable: true })
  user_password: string;
}
