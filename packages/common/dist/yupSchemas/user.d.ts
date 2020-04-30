import * as yup from 'yup';
export declare const fieldRequired = "This field is required";
export declare const invalidEmail = "Email must be a valid email";
export declare const emailNotLongEnough = "Email must be at least 3 characters";
export declare const passwordNotLongEnough = "Password must be at least 3 characters";
export declare const passwordNotMatch = "Password does not match";
export declare const registerPasswordValidation: yup.StringSchema<string>;
export declare const userValidationSchema: yup.ObjectSchema<object & {
    email: string;
    password: string;
}>;
export declare const confirmPassword: yup.StringSchema<string>;
export declare const loginSchema: yup.ObjectSchema<object & {
    email: string;
    password: string;
}>;
export declare const changePasswordSchema: yup.ObjectSchema<object & {
    newPassword: string;
}>;
