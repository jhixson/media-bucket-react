/* eslint-disable */
import * as SchemaTypes from "../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type CategoryItemsQueryVariables = SchemaTypes.Exact<{
  categoryId: SchemaTypes.Scalars["Int"];
}>;

export type CategoryItemsQuery = {
  categoryItems?: SchemaTypes.Maybe<
    Array<
      SchemaTypes.Maybe<{
        __typename?: "Category";
        title: string;
        items: Array<{
          __typename?: "Item";
          id: number;
          categoryId: number;
          title: string;
          status?: SchemaTypes.Maybe<SchemaTypes.Status>;
        }>;
      }>
    >
  >;
};

export const CategoryItemsDocument = gql`
  query categoryItems($categoryId: Int!) {
    categoryItems(categoryId: $categoryId) {
      title
      items {
        id
        categoryId
        title
        status
      }
    }
  }
`;

/**
 * __useCategoryItemsQuery__
 *
 * To run a query within a React component, call `useCategoryItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryItemsQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useCategoryItemsQuery(
  baseOptions: Apollo.QueryHookOptions<
    CategoryItemsQuery,
    CategoryItemsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CategoryItemsQuery, CategoryItemsQueryVariables>(
    CategoryItemsDocument,
    options
  );
}
export function useCategoryItemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoryItemsQuery,
    CategoryItemsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CategoryItemsQuery, CategoryItemsQueryVariables>(
    CategoryItemsDocument,
    options
  );
}
export type CategoryItemsQueryHookResult = ReturnType<
  typeof useCategoryItemsQuery
>;
export type CategoryItemsLazyQueryHookResult = ReturnType<
  typeof useCategoryItemsLazyQuery
>;
export type CategoryItemsQueryResult = Apollo.QueryResult<
  CategoryItemsQuery,
  CategoryItemsQueryVariables
>;
