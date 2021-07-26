import { graphql } from "msw";

const handlers = [
  graphql.query("GetItems", (_req, res, ctx) => {
    return res(
      ctx.data({
        items: [
          {
            title: "Back to the Future Part 2",
            status: "FINISHED",
          },
          {
            title: "Back to the Future Part 3",
            status: "PENDING",
          },
        ],
      })
    );
  }),
];

export default handlers;
