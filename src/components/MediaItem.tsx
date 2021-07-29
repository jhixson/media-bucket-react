import React, { useState } from "react";
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

const GrayCheckbox = withStyles({
  root: {
    color: "#808080",
    "&$checked": {
      color: "#808080",
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const MediaItem: React.FC<Item> = ({ title, status }) => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(status === Status.Finished);

  const toggleCheck = () => setIsChecked(!isChecked);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <FormGroup row>
          <FormControlLabel
            control={
              <GrayCheckbox
                checked={isChecked}
                onChange={toggleCheck}
                name="checkedB"
                color="primary"
              />
            }
            label={
              <Typography
                className={classes.title}
                component="h2"
                color="textPrimary"
              >
                {title}
              </Typography>
            }
          />
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default MediaItem;
