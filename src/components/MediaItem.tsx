import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import { Item } from "../__generated__/types";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#272828",
    borderColor: "#3e3e3f",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

const MediaItem: React.FC<Item> = ({ title, status }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          component="h2"
          color="textPrimary"
        >
          {title}
        </Typography>
        <p>{status}</p>
      </CardContent>
    </Card>
  );
};

export default MediaItem;
