import React from "react";
// import gql from "graphql-tag";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import { useDeleteItemMutation } from "../__generated__/graphql/deleteItem.types";
import { Item } from "../__generated__/types";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#272828",
    borderColor: "#3e3e3f",
  },
}));

type Props = {
  id: number;
  title: string;
  open: boolean;
  handleClose: () => void;
};

const DeleteItemDialog: React.FC<Props> = ({
  id,
  title,
  open = false,
  handleClose,
}) => {
  const classes = useStyles();
  const [deleteItem] = useDeleteItemMutation({
    update: (cache, { data }) => {
      cache.modify({
        id: `Category:${data?.deleteItem?.categoryId}`,
        fields: {
          items(existingItems = [], { readField }) {
            return existingItems.filter(
              (item: Item) => readField("id", item) !== id
            );
          },
        },
      });
    },
  });

  const submit = async () => {
    const { errors } = await deleteItem({
      variables: {
        id,
      },
    });

    // eslint-disable-next-line no-console
    if (errors) console.log(errors);

    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
    >
      <DialogTitle
        id="form-dialog-title"
        className={classes.root}
        color="primary"
      >
        Delete Item
      </DialogTitle>
      <DialogContent className={classes.root}>
        <DialogContentText color="primary">
          Are you sure you want to delete {title}?
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.root}>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={submit} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteItemDialog;
