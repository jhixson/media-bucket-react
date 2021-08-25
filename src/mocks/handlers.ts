import { graphql } from "msw";
import {
  AddItemMutation,
  AddItemMutationVariables,
} from "../__generated__/graphql/addItem.types";
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
                rating: null,
                notes: "",
              },
              {
                __typename: "Item",
                id: 2,
                categoryId: 1,
                title: "Back to the Future Part 3",
                status: "PENDING",
                rating: null,
                notes: "",
              },
              {
                __typename: "Item",
                id: 3,
                categoryId: 1,
                title: "Cool Runnings",
                status: "FINISHED",
                rating: null,
                notes: "",
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
      const { id, item } = req.variables;
      const { categoryId, title, status, rating, notes } = item;
      return res(
        ctx.data({
          updateItem: {
            __typename: "Item",
            id,
            categoryId,
            title,
            status,
            rating,
            notes,
          },
        })
      );
    }
  ),

  graphql.mutation<AddItemMutation, AddItemMutationVariables>(
    "addItem",
    (req, res, ctx) => {
      const { item } = req.variables;
      const { categoryId, title, status } = item;
      return res(
        ctx.data({
          addItem: {
            __typename: "Item",
            id: 4,
            categoryId,
            title,
            status,
            rating: 0,
            notes: "",
          },
        })
      );
    }
  ),
];

export default handlers;
