import React, { useState } from "react";
import shallow from "zustand/shallow";
import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import FilterIcon from "@material-ui/icons/FilterList";
import { useGetCategoriesQuery } from "./__generated__/graphql/getCategories.types";
import ItemList from "./components/ItemList";
import Header from "./Header";
import Filters from "./Filters";
import useStore from "./store";

const useStyles = makeStyles(() => ({
  filterButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

const App: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const { data, loading } = useGetCategoriesQuery();
  const { rating, status } = useStore(
    (state) => ({ rating: state.rating, status: state.status }),
    shallow
  );
  const toggleFilters = () => {
    setIsFilterDrawerOpen((isOpen) => !isOpen);
  };
  const categoryList = loading
    ? []
    : data?.categories.map((category) => {
        const filteredItems = category.items.filter((item) => {
          if (rating && item.rating !== rating) return false;
          if (status && item.status !== status) return false;
          return true;
        });
        return (
          <Grid key={category.id} item xs={12} md={3}>
            <ItemList
              id={category.id}
              title={category.title}
              items={filteredItems}
            />
          </Grid>
        );
      });

  return (
    <Box mx={2}>
      <Filters
        open={isFilterDrawerOpen}
        handleClose={() => setIsFilterDrawerOpen(false)}
      />
      <IconButton onClick={toggleFilters} className={classes.filterButton}>
        <FilterIcon />
      </IconButton>
      <Header />
      <Grid container justifyContent="center" spacing={isSmall ? 0 : 4}>
        {categoryList}
      </Grid>
    </Box>
  );
};

export default App;
