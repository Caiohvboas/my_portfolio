import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: "#89BB2B",
      },
      secondary: {
        main: "#66D9EF",
      },
    },

    typography: {
        fontFamily: "Arial"
    }
  });

  theme =  responsiveFontSizes(theme)

  export default theme;