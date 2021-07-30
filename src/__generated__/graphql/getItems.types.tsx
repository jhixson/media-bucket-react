/* eslint-disable */
import * as SchemaTypes from "../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type GetItemsQueryVariables = SchemaTypes.Exact<{
  [key: string]: never;
}>;

export type GetItemsQuery = {
  items?: SchemaTypes.Maybe<
    Array<
      SchemaTypes.Maybe<{
        __typename?: "Item";
        id: number;
        title?: SchemaTypes.Maybe<string>;
        status?: SchemaTypes.Maybe<SchemaTypes.Status>;
      }>
    >
  >;
};

export const GetItemsDocument = gql`
  query GetItems {
    items {
      id
      title
      status
    }
  }
`;

/**
 * __useGetItemsQuery__
 *
 * To run a query within a React component, call `useGetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetItemsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetItemsQuery, GetItemsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetItemsQuery, GetItemsQueryVariables>(
    GetItemsDocument,
    options
  );
}
export function useGetItemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetItemsQuery,
    GetItemsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetItemsQuery, GetItemsQueryVariables>(
    GetItemsDocument,
    options
  );
}
export type GetItemsQueryHookResult = ReturnType<typeof useGetItemsQuery>;
export type GetItemsLazyQueryHookResult = ReturnType<
  typeof useGetItemsLazyQuery
>;
export type GetItemsQueryResult = Apollo.QueryResult<
  GetItemsQuery,
  GetItemsQueryVariables
>;
