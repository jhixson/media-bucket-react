import { graphql } from "msw";
import {
  UpdateItemMutation,
  UpdateItemMutationVariables,
} from "../__generated__/graphql/updateItem.types";

const handlers = [
  graphql.query("getCategories", (_req, res, ctx) => {
    return res(
      ctx.data({
        categories: [
          {
            __typename: "Category",
            id: 1,
            title: "Movies",
            items: [
              {
                __typename: "Item",
                id: 1,
                categoryId: 1,
                title: "Back to the Future Part 2",
                status: "FINISHED",
              },
              {
                __typename: "Item",
                id: 2,
                categoryId: 1,
                title: "Back to the Future Part 3",
                status: "PENDING",
              },
              {
                __typename: "Item",
                id: 3,
                categoryId: 1,
                title: "Cool Runnings",
                status: "FINISHED",
              },
            ],
          },
        ],
      })
    );
  }),

  graphql.mutation<UpdateItemMutation, UpdateItemMutationVariables>(
    "updateItem",
    (req, res, ctx) => {
      const { item } = req.variables;
      const { id, categoryId, status } = item;
      return res(
        ctx.data({
          updateItem: {
            __typename: "Item",
            id,
            categoryId,
            title: "Cool Runnings",
            status,
          },
        })
      );
    }
  ),
];

export default handlers;
