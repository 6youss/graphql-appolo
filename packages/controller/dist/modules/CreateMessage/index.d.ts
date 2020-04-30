import * as React from 'react';
import { MutationFn } from 'react-apollo';
import { CreateMessageMutation, CreateMessageMutationVariables } from '../../schemaTypes';
export declare const createMessageMutation: any;
export interface WithCreatemessage {
    createMessage: MutationFn<CreateMessageMutation, CreateMessageMutationVariables>;
}
interface Props {
    children: (data: WithCreatemessage) => JSX.Element | null;
}
export declare class CreateMessage extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
