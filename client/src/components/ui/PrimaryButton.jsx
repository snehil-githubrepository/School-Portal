import { Button, ThemeProvider, createTheme } from "@mui/material";
import { blue, deepPurple, green } from "@mui/material/colors";

import React from "react";

const PrimaryButton = ({ variant, children, color }) => {
  const theme = createTheme({
    palette: {
      default: { main: blue["700"], contrastText: "#fff" },
      student: { main: green["500"], contrastText: "#fff" },
      teacher: { main: deepPurple["400"], contrastText: "#fff" },
    },
    components: {
      MuiButton: {
        defaultProps: {
          //   disableElevation: true,
        },

        styleOverrides: {
          root: {
            textTransform: "none",
            fontFamily: "Poppins",
          },
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant={variant || "contained"} color={color || "default"}>
          {children}
        </Button>
      </ThemeProvider>
    </>
  );
};

export default PrimaryButton;
