import { Container, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  header: {
    margin: "3rem 0",
  },
  heading: {
    fontFamily: "Secular One, Roboto, Helvetica, Arial, sans-serif",
    textAlign: "center",
  },
});

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" className={classes.heading}>
          Media Bucket List
        </Typography>
      </Container>
    </header>
  );
};

export default Header;
