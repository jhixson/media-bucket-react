import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@material-ui/core";
import { Item, Status } from "../__generated__/types";
import { useUpdateItemMutation } from "../__generated__/graphql/updateItem.types";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 16,
    backgroundColor: "#272828",
    borderColor: "#3e3e3f",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

const GrayCheckbox = withStyles({
  root: {
    color: "#808080",
    "&$checked": {
      color: "#808080",
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const SlimCardContent = withStyles({
  root: {
    padding: "8px 16px",
    "&:last-child": {
      paddingBottom: "12px",
    },
  },
})(CardContent);

const MediaItem: React.FC<Item> = ({ id, categoryId, title, status }) => {
  const classes = useStyles();

  const [updateItem] = useUpdateItemMutation();

  const toggleCheck = async () => {
    let newStatus = Status.Pending;
    if (status === Status.Pending) {
      newStatus = Status.Started;
    } else if (status === Status.Started) {
      newStatus = Status.Finished;
    }

    const { errors } = await updateItem({
      variables: { id, item: { categoryId, status: newStatus } },
      optimisticResponse: {
        updateItem: {
          __typename: "Item",
          categoryId,
          id,
          status: newStatus,
          title,
        },
      },
    });

    // eslint-disable-next-line no-console
    if (errors) console.log(errors);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <SlimCardContent>
        <FormGroup row>
          <FormControlLabel
            control={
              <GrayCheckbox
                checked={status === Status.Finished}
                indeterminate={status === Status.Started}
                onChange={toggleCheck}
                name={`status_${id}`}
                color="primary"
              />
            }
            label={
              <Typography component="h3" color="textPrimary">
                {title}
              </Typography>
            }
          />
        </FormGroup>
      </SlimCardContent>
    </Card>
  );
};

export default MediaItem;
