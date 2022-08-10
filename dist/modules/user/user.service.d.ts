import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Status } from './entities/user.entity';
import { User, UserDocument } from './schema/user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserInput): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserInput: UpdateUserInput): Promise<User>;
    remove(id: string): Promise<any>;
    signin(signinUserDto: CreateUserInput): Promise<Status>;
    signup(signupUserDto: CreateUserInput): Promise<Status>;
    userPasswordEncryted(user_password: string): string;
}
