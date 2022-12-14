import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Status, User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }
  @Query(() => Status)
  signin(@Args('signinUserInput') signinUserInput: CreateUserInput) {
    return this.userService.signin(signinUserInput);
  }
  @Mutation(() => Status)
  signup(@Args('signupUserInput') signupUserInput: CreateUserInput) {
    return this.userService.signup(signupUserInput);
  }
  @Query(() => [User])
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User)
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => String }) id: string) {
    return this.userService.remove(id);
  }
}
