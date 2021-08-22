import React from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
  Slider,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  Select,
  Grid,
} from "@material-ui/core";
import { useUpdateItemMutation } from "../__generated__/graphql/updateItem.types";
import { Item, Status } from "../__generated__/types";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#272828",
    borderColor: "#3e3e3f",
  },
}));

type Props = Item & {
  open: boolean;
  handleClose: () => void;
  setIsDeleteItemOpen: (open: boolean) => void;
};

type FormValues = Omit<Item, "id" | "categoryId">;

const UpdateItemDialog: React.FC<Props> = ({
  id,
  categoryId,
  title,
  notes,
  rating,
  status,
  open = false,
  handleClose,
  setIsDeleteItemOpen,
}) => {
  const classes = useStyles();
  const initialValues: FormValues = {
    title,
    status,
    notes,
    rating,
  };
  const [updateItem] = useUpdateItemMutation();

  const submit = async (values: FormValues) => {
    const { errors } = await updateItem({
      variables: {
        id,
        item: {
          categoryId,
          ...values,
        },
      },
    });

    // eslint-disable-next-line no-console
    if (errors) console.log(errors);

    handleClose();
  };

  const confirmDelete = () => {
    handleClose();
    setIsDeleteItemOpen(true);
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
        Update Item
      </DialogTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => submit(values)}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <DialogContent className={classes.root}>
              <Box mb={3}>
                <Field id="title" name="title">
                  {({ field }: FieldProps) => (
                    <TextField
                      autoFocus
                      margin="dense"
                      id="title"
                      label="Title"
                      type="text"
                      inputProps={field}
                      fullWidth
                    />
                  )}
                </Field>
              </Box>
              <Box>
                <Typography variant="caption" id="rating-slider" gutterBottom>
                  Rating
                </Typography>
                <Field id="rating" name="rating">
                  {({ field }: FieldProps) => (
                    <Slider
                      aria-labelledby="rating-slider"
                      valueLabelDisplay="on"
                      step={1}
                      marks
                      min={0}
                      max={5}
                      value={field.value}
                      onChange={(_e, value) => setFieldValue(field.name, value)}
                    />
                  )}
                </Field>
              </Box>
              <Box mb={2}>
                <Field id="notes" name="notes">
                  {({ field }: FieldProps) => (
                    <TextField
                      margin="dense"
                      label="Notes"
                      type="text"
                      inputProps={field}
                      multiline
                      fullWidth
                    />
                  )}
                </Field>
              </Box>
              <Box mb={2}>
                <InputLabel>
                  <Typography variant="caption" id="status-label" gutterBottom>
                    Status
                  </Typography>
                </InputLabel>
                <Field id="status" name="status">
                  {({ field }: FieldProps) => (
                    <Select
                      labelId="status-label"
                      value={field.value}
                      onChange={(e) =>
                        setFieldValue(field.name, e.target.value)
                      }
                    >
                      <MenuItem value={Status.Pending}>Pending</MenuItem>
                      <MenuItem value={Status.Started}>Started</MenuItem>
                      <MenuItem value={Status.Finished}>Finished</MenuItem>
                    </Select>
                  )}
                </Field>
              </Box>
            </DialogContent>
            <DialogActions className={classes.root}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Button onClick={confirmDelete} color="secondary">
                    Delete
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button color="primary" type="submit" disabled={isSubmitting}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default UpdateItemDialog;
