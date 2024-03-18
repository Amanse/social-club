import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <Typography variant="subtitle1" color="text.secondary">
      Creation of Aman, Tanishq, Tanish -
      <Link to="/" color="inherit">
        Social Club
      </Link>
    </Typography>
  );
};

export default Copyright;
