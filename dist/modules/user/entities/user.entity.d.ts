import { HttpStatus } from '@nestjs/common';
export declare class User {
    id: string;
    user_Name: string;
    user_moblieNo: number;
    user_password: string;
}
export declare class Status {
    status: HttpStatus;
    message: string;
}
