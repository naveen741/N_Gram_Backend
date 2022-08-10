import { CreateSigninInput } from './dto/create-signin.input';
import { UpdateSigninInput } from './dto/update-signin.input';
export declare class SigninService {
    create(createSigninInput: CreateSigninInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSigninInput: UpdateSigninInput): string;
    remove(id: number): string;
}
