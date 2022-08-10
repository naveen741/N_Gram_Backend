import { UserService } from './user.service';
import { Status } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserInput: CreateUserInput): Promise<import("./schema/user.schema").User>;
    signin(signinUserInput: CreateUserInput): Promise<Status>;
    signup(signupUserInput: CreateUserInput): Promise<Status>;
    findAll(): Promise<import("./schema/user.schema").User[]>;
    findOne(id: string): Promise<import("./schema/user.schema").User>;
    updateUser(updateUserInput: UpdateUserInput): Promise<import("./schema/user.schema").User>;
    removeUser(id: string): Promise<any>;
}
