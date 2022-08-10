"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const crypto_1 = require("crypto");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schema/user.schema");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findOne(id) {
        return this.userModel.findOne({ _id: id }).exec();
    }
    async update(id, updateUserInput) {
        await this.userModel.updateOne({ _id: id }, updateUserInput).exec();
        return this.userModel.findOne({ _id: id }).exec();
    }
    async remove(id) {
        return this.userModel.remove({ _id: id }).exec();
    }
    async signin(signinUserDto) {
        try {
            signinUserDto.user_password = this.userPasswordEncryted(signinUserDto.user_password);
            const user = await this.userModel
                .findOne({
                user_Name: signinUserDto.user_Name,
                user_moblieNo: signinUserDto.user_moblieNo,
                user_password: signinUserDto.user_password,
            })
                .exec();
            if (user) {
                return { status: 200, message: 'SUCCESS' };
            }
            else {
                return { status: 200, message: 'USER NOT FOUND' };
            }
        }
        catch (e) {
            return { status: 200, message: 'signin error' };
        }
    }
    async signup(signupUserDto) {
        try {
            signupUserDto.user_password = this.userPasswordEncryted(signupUserDto.user_password);
            const createdUser = new this.userModel(signupUserDto);
            createdUser.save();
            return { status: 200, message: 'SUCCESS' };
        }
        catch (e) {
            return { status: 200, message: 'signup error' };
        }
    }
    userPasswordEncryted(user_password) {
        const mykey = (0, crypto_1.createCipher)('aes-128-cbc', 'userPassword');
        let userPassword = mykey.update(user_password, 'utf8', 'hex');
        userPassword += mykey.final('hex');
        return userPassword;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map