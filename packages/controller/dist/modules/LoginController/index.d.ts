import * as React from 'react';
import { LoginMutationVariables } from '../../schemaTypes';
import { NormalizeErrorMap } from '../../types/NormalizeErrorMap';
interface Props {
    onSessionId?: (sessionId: string) => void;
    children: (data: {
        submit: (values: LoginMutationVariables) => Promise<NormalizeErrorMap | null>;
    }) => JSX.Element | null;
}
export declare const LoginController: React.ComponentClass<Props>;
export {};
