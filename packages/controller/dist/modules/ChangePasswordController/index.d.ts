import * as React from 'react';
import { ForgotPasswordChangeMutationVariables } from '../../schemaTypes';
import { NormalizeErrorMap } from '../../types/NormalizeErrorMap';
interface Props {
    children: (data: {
        submit: (values: ForgotPasswordChangeMutationVariables) => Promise<NormalizeErrorMap | null>;
    }) => JSX.Element | null;
}
export declare const ChangePasswordController: React.ComponentClass<Props>;
export {};
