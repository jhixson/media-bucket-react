import React from "react";
import { makeStyles } from "@material-ui/core";
import MediaItem from "./components/MediaItem";
import { useGetItemsQuery } from "./__generated__/graphql/getItems.types";

const useStyles = makeStyles({
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  const { data, loading } = useGetItemsQuery();
  const itemList = loading
    ? []
    : data?.items?.map((item) => (
        <li key={item?.title}>
          <MediaItem title={item?.title} status={item?.status} />
        </li>
      ));
  return <ul className={classes.list}>{itemList}</ul>;
};

export default Home;
