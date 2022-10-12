import { createTheme } from "@mui/material";

export const lightTheme = {
  colors: {
    primary: "#ffffff",
    secondary: "#000",
    gray1: "#212529",
    gray2: "#343A40",
    gray3: "#ADB5BD",
    gray4: "#E9ECEF",

    success: "#56CF8E",
    red: "#ff0000",

    aquaLight: "#65C1BC",
    aquaLighter: "#D2EDEC",
    aquaDark: "#468783",

    orange: "#FF8947",
    orangeLight: "#FFDDCA",
    orangeLighter: "#FFEDE4",

    body: "#f7f6f3",
    backgroundTransparent: "#00000052",
  },
};
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const MUITheme = createTheme({
  typography: {
    fontFamily: ["Nunito", "Roboto"].join(","),
  },
  palette: {
    primary: {
      main: "#65C1BC",
      "300": "#D2EDEC",
      "500": "#468783",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FF8947",
    },
  },
});
