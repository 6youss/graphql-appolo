import * as React from 'react';
import { CreateListingMutationVariables } from '../../schemaTypes';
export declare const createListingMutation: any;
export interface WithCreateListing {
    createListing: (variables: CreateListingMutationVariables) => void;
}
export declare const withCreateListing: (WrappedComponent: React.ComponentType<any>) => React.ComponentClass<any>;
