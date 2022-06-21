import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import AppbarDesktop from "./AppbarDesktop";
import AppbarMobile from "./AppbarMobile";

const FrontOfficeLayout = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  
  
  return (
    <>
    {matches ? (
      <AppbarMobile matches={matches} />
    ) : (
      <AppbarDesktop matches={matches} />
    )}
  </>
  );
};

export default FrontOfficeLayout;

