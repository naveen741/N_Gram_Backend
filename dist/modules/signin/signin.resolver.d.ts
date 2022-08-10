import { SigninService } from './signin.service';
import { CreateSigninInput } from './dto/create-signin.input';
import { UpdateSigninInput } from './dto/update-signin.input';
export declare class SigninResolver {
    private readonly signinService;
    constructor(signinService: SigninService);
    createSignin(createSigninInput: CreateSigninInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateSignin(updateSigninInput: UpdateSigninInput): string;
    removeSignin(id: number): string;
}
