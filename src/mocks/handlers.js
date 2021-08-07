import { graphql } from "msw";

const handlers = [
  graphql.query("getCategories", (_req, res, ctx) => {
    return res(
      ctx.data({
        categories: [
          {
            id: 1,
            title: "Movies",
            items: [
              {
                id: 1,
                categoryId: 1,
                title: "Back to the Future Part 2",
                status: "FINISHED",
              },
              {
                id: 2,
                categoryId: 1,
                title: "Back to the Future Part 3",
                status: "PENDING",
              },
            ],
          },
        ],
      })
    );
  }),
];

export default handlers;
