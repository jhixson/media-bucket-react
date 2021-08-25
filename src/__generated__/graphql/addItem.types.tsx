/* eslint-disable */
import * as SchemaTypes from "../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type AddItemMutationVariables = SchemaTypes.Exact<{
  item: SchemaTypes.ItemInput;
}>;

export type AddItemMutation = {
  addItem?: SchemaTypes.Maybe<{
    __typename?: "Item";
    id: number;
    categoryId: number;
    title: string;
    status?: SchemaTypes.Maybe<SchemaTypes.Status>;
    rating?: SchemaTypes.Maybe<number>;
    notes?: SchemaTypes.Maybe<string>;
  }>;
};

export const AddItemDocument = gql`
  mutation addItem($item: ItemInput!) {
    addItem(item: $item) {
      id
      categoryId
      title
      status
      rating
      notes
    }
  }
`;
export type AddItemMutationFn = Apollo.MutationFunction<
  AddItemMutation,
  AddItemMutationVariables
>;

/**
 * __useAddItemMutation__
 *
 * To run a mutation, you first call `useAddItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemMutation, { data, loading, error }] = useAddItemMutation({
 *   variables: {
 *      item: // value for 'item'
 *   },
 * });
 */
export function useAddItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddItemMutation,
    AddItemMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddItemMutation, AddItemMutationVariables>(
    AddItemDocument,
    options
  );
}
export type AddItemMutationHookResult = ReturnType<typeof useAddItemMutation>;
export type AddItemMutationResult = Apollo.MutationResult<AddItemMutation>;
export type AddItemMutationOptions = Apollo.BaseMutationOptions<
  AddItemMutation,
  AddItemMutationVariables
>;
