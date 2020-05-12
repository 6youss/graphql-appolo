import * as React from "react";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";
import { RegisterMutation, RegisterMutationVariables } from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

interface Props {
  children: (data: {
    submit: (values: RegisterMutationVariables) => Promise<NormalizedErrorMap | null>;
  }) => JSX.Element | null;
}
const REGISTER_MUTATION = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const RegisterController: React.FC<Props> = ({ children }) => {
  const [mutate] = useMutation<RegisterMutation, RegisterMutationVariables>(REGISTER_MUTATION);

  const onSubmit = async (values: RegisterMutationVariables) => {
    console.log(values);
    const { data } = await mutate({
      variables: values,
    });
    console.log("response: ", data);

    if (data && data.register) {
      return normalizeErrors(data.register);
    }
    return null;
  };
  return children({ submit: onSubmit });
};
