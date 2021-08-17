import React, { useState } from "react";
import gql from "graphql-tag";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { useAddItemMutation } from "../__generated__/graphql/addItem.types";
import { Status } from "../__generated__/types";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#272828",
    borderColor: "#3e3e3f",
  },
}));

type Props = {
  categoryId: number;
  categoryName: string;
  open: boolean;
  handleClose: () => void;
};

const AddItemDialog: React.FC<Props> = ({
  categoryId,
  categoryName,
  open = false,
  handleClose,
}) => {
  const classes = useStyles();
  const [itemTitle, setItemTitle] = useState("");
  const [addItem] = useAddItemMutation({
    update: (cache, { data }) => {
      cache.modify({
        id: `Category:${data?.addItem?.categoryId}`,
        fields: {
          items(existingItems = []) {
            const newItemRef = cache.writeFragment({
              data: data?.addItem,
              fragment: gql`
                fragment NewItem on Item {
                  id
                  status
                }
              `,
            });
            return [...existingItems, newItemRef];
          },
        },
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItemTitle(value);
  };

  const submit = async () => {
    const { errors } = await addItem({
      variables: {
        item: {
          categoryId,
          title: itemTitle,
          status: Status.Pending,
        },
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
        Add Item
      </DialogTitle>
      <DialogContent className={classes.root}>
        <DialogContentText color="primary">
          Add item to {categoryName}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          value={itemTitle}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions className={classes.root}>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={submit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddItemDialog;
