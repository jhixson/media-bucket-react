import React from "react";
import {
  Box,
  createStyles,
  Drawer,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Status } from "./__generated__/types";
import useStore from "./store";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      marginBottom: theme.spacing(2),
      minWidth: 100,
    },
  })
);

const Filters: React.FC<Props> = ({ open = false, handleClose }) => {
  const classes = useStyles();
  const { rating, setRating, status, setStatus } = useStore();
  const changeRating = (value: unknown) => {
    const num = parseInt(value as string, 10) || 0;
    setRating(num);
  };
  const changeStatus = (value: unknown) => setStatus(value as Status);
  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box p={3}>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="rating-label">Rating</InputLabel>
          <Select
            labelId="rating-label"
            id="rating-select"
            value={rating}
            onChange={(e) => changeRating(e.target.value)}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status-select"
            value={status}
            onChange={(e) => changeStatus(e.target.value)}
          >
            <MenuItem>All</MenuItem>
            <MenuItem value={Status.Pending}>Pending</MenuItem>
            <MenuItem value={Status.Started}>Started</MenuItem>
            <MenuItem value={Status.Finished}>Finished</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Drawer>
  );
};

export default Filters;
