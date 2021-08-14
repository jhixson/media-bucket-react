/* eslint-disable */
import * as SchemaTypes from "../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type UpdateItemMutationVariables = SchemaTypes.Exact<{
  item: SchemaTypes.ItemInput;
}>;

export type UpdateItemMutation = {
  updateItem?: SchemaTypes.Maybe<{
    __typename?: "Item";
    id: number;
    categoryId: number;
    title: string;
    status?: SchemaTypes.Maybe<SchemaTypes.Status>;
  }>;
};

export const UpdateItemDocument = gql`
  mutation updateItem($item: ItemInput!) {
    updateItem(item: $item) {
      id
      categoryId
      title
      status
    }
  }
`;
export type UpdateItemMutationFn = Apollo.MutationFunction<
  UpdateItemMutation,
  UpdateItemMutationVariables
>;

/**
 * __useUpdateItemMutation__
 *
 * To run a mutation, you first call `useUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemMutation, { data, loading, error }] = useUpdateItemMutation({
 *   variables: {
 *      item: // value for 'item'
 *   },
 * });
 */
export function useUpdateItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateItemMutation,
    UpdateItemMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateItemMutation, UpdateItemMutationVariables>(
    UpdateItemDocument,
    options
  );
}
export type UpdateItemMutationHookResult = ReturnType<
  typeof useUpdateItemMutation
>;
export type UpdateItemMutationResult =
  Apollo.MutationResult<UpdateItemMutation>;
export type UpdateItemMutationOptions = Apollo.BaseMutationOptions<
  UpdateItemMutation,
  UpdateItemMutationVariables
>;
