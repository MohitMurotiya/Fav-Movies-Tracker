import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#232121",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <h1>Mohit Murotiya</h1>
        <a href="">Visit GitHub Repository</a>
      </footer>
    </div>
  );
};

export default Footer;
