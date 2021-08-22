/* eslint-disable */
import * as SchemaTypes from "../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type DeleteItemMutationVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars["Int"];
}>;

export type DeleteItemMutation = {
  deleteItem?: SchemaTypes.Maybe<{
    __typename?: "Item";
    id: number;
    categoryId: number;
  }>;
};

export const DeleteItemDocument = gql`
  mutation deleteItem($id: Int!) {
    deleteItem(id: $id) {
      id
      categoryId
    }
  }
`;
export type DeleteItemMutationFn = Apollo.MutationFunction<
  DeleteItemMutation,
  DeleteItemMutationVariables
>;

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteItemMutation,
    DeleteItemMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteItemMutation, DeleteItemMutationVariables>(
    DeleteItemDocument,
    options
  );
}
export type DeleteItemMutationHookResult = ReturnType<
  typeof useDeleteItemMutation
>;
export type DeleteItemMutationResult =
  Apollo.MutationResult<DeleteItemMutation>;
export type DeleteItemMutationOptions = Apollo.BaseMutationOptions<
  DeleteItemMutation,
  DeleteItemMutationVariables
>;
