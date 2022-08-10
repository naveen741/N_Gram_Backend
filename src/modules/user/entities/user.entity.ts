import { HttpStatus } from '@nestjs/common';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: string;
  @Field({ nullable: true })
  user_Name: string;
  @Field({ nullable: true })
  user_moblieNo: number;
  @Field({ nullable: true })
  user_password: string;
}
@ObjectType()
export class Status {
  @Field({ nullable: true })
  status: HttpStatus;
  @Field({ nullable: true })
  message: string;
}
