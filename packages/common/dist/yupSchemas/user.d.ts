import * as yup from "yup";
export declare const emailNotLongEnough = "email must be at least 3 characters";
export declare const passwordNotLongEnough = "password must be at least 3 characters";
export declare const invalidEmail = "email must be a valid email";
export declare const registerPasswordValidation: yup.StringSchema<string>;
export declare const validUserSchema: yup.ObjectSchema<object & {
    email: string;
    password: string;
}>;
export declare const loginSchema: yup.ObjectSchema<object & {
    email: string;
    password: string;
}>;
export declare const changePasswordSchema: yup.ObjectSchema<object & {
    newPassword: string;
}>;
