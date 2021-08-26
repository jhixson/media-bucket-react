import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React, { useState } from "react";
import { Item } from "../__generated__/types";
import AddItemDialog from "./AddItemDialog";
import MediaItem from "./MediaItem";

type Props = {
  id: number;
  title: string;
  items: Item[];
};

const useStyles = makeStyles({
  categoryHeader: {
    marginBottom: 16,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

const sortByTitle = (a: Item, b: Item) =>
  a.title.localeCompare(b.title, "en", { sensitivity: "base" });

const ItemList: React.FC<Props> = ({ id, title, items }) => {
  const classes = useStyles();
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);

  const sortedItems = Array.from(items).sort(sortByTitle);

  const itemList = sortedItems.map((item) => (
    <MediaItem key={item.id} {...item} />
  ));
  return (
    <Box minWidth={275} mb={4}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.categoryHeader}
      >
        <Grid item className={classes.titleWrapper}>
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
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="small"
            endIcon={<AddCircle />}
            onClick={() => setIsAddItemOpen(true)}
          >
            Add Item
          </Button>
        </Grid>
      </Grid>
      {itemList}
      <AddItemDialog
        categoryId={id}
        categoryName={title}
        open={isAddItemOpen}
        handleClose={() => setIsAddItemOpen(false)}
      />
    </Box>
  );
};

export default ItemList;
