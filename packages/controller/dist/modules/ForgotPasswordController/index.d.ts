import * as React from 'react';
interface Props {
    children: (data: {
        submit: (values: any) => Promise<null>;
    }) => JSX.Element | null;
}
export declare const ForgotPasswordController: React.ComponentClass<Props>;
export {};
