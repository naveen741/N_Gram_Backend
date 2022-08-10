import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createCipher } from 'crypto';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Status } from './entities/user.entity';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserInput): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    await this.userModel.updateOne({ _id: id }, updateUserInput).exec();
    return this.userModel.findOne({ _id: id }).exec();
  }

  async remove(id: string) {
    return this.userModel.remove({ _id: id }).exec();
  }
  async signin(signinUserDto: CreateUserInput): Promise<Status> {
    try {
      signinUserDto.user_password = this.userPasswordEncryted(
        signinUserDto.user_password,
      );
      const user = await this.userModel
        .findOne({
          user_Name: signinUserDto.user_Name,
          user_moblieNo: signinUserDto.user_moblieNo,
          user_password: signinUserDto.user_password,
        })
        .exec();
      if (user) {
        return { status: 200, message: 'SUCCESS' };
      } else {
        return { status: 200, message: 'USER NOT FOUND' };
      }
    } catch (e) {
      return { status: 200, message: 'signin error' };
    }
  }
  async signup(signupUserDto: CreateUserInput): Promise<Status> {
    try {
      signupUserDto.user_password = this.userPasswordEncryted(
        signupUserDto.user_password,
      );
      const createdUser = new this.userModel(signupUserDto);
      createdUser.save();
      return { status: 200, message: 'SUCCESS' };
    } catch (e) {
      return { status: 200, message: 'signup error' };
    }
  }
  userPasswordEncryted(user_password: string) {
    const mykey = createCipher('aes-128-cbc', 'userPassword');
    let userPassword = mykey.update(user_password, 'utf8', 'hex');
    userPassword += mykey.final('hex');
    return userPassword;
  }
}
