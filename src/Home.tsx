import React from "react";
import MediaItem from "./components/MediaItem";
import { useGetItemsQuery } from "./__generated__/graphql/getItems.types";

const Home: React.FC = () => {
  const { data, loading } = useGetItemsQuery();
  const itemList = loading
    ? []
    : data?.items?.map((item) => (
        <li key={item?.title}>
          <MediaItem title={item?.title} status={item?.status} />
        </li>
      ));
  return <ul>{itemList}</ul>;
};

export default Home;
