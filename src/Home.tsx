import React from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { useGetCategoriesQuery } from "./__generated__/graphql/getCategories.types";
import ItemList from "./components/ItemList";

const Home: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const { data, loading } = useGetCategoriesQuery();
  const categoryList = loading
    ? []
    : data?.categories.map((category) => {
        return (
          <Grid key={category.id} item xs={12} md={3}>
            <ItemList
              id={category.id}
              title={category.title}
              items={category.items}
            />
          </Grid>
        );
      });

  return (
    <Box mx={2}>
      <Grid container justifyContent="center" spacing={isSmall ? 0 : 4}>
        {categoryList}
      </Grid>
    </Box>
  );
};

export default Home;
