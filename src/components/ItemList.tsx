import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Item } from "../__generated__/types";
import MediaItem from "./MediaItem";

type Props = {
  title: string;
  items: Item[];
};

const useStyles = makeStyles({
  title: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
});

const ItemList: React.FC<Props> = ({ title, items }) => {
  const classes = useStyles();
  const itemList = items.map((item) => <MediaItem key={item.id} {...item} />);
  return (
    <Box minWidth={275} mb={4}>
      <Grid container alignItems="baseline" spacing={2}>
        <Grid item>
          <Typography
            component="h2"
            color="textPrimary"
            className={classes.title}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <span>{items.length}</span>
        </Grid>
      </Grid>
      {itemList}
    </Box>
  );
};

export default ItemList;
