import React from "react";
import Grid from "@material-ui/core/Grid";
import MediaItem from "./components/MediaItem";
import { useGetItemsQuery } from "./__generated__/graphql/getItems.types";

const Home: React.FC = () => {
  const { data, loading } = useGetItemsQuery();
  const itemList = loading
    ? []
    : data?.items?.map(
        (item) =>
          item && (
            <Grid key={item.id} item>
              <MediaItem id={item.id} title={item.title} status={item.status} />
            </Grid>
          )
      );

  return (
    <Grid container justifyContent="center" spacing={4} xs={12}>
      {itemList}
    </Grid>
  );
};

export default Home;
