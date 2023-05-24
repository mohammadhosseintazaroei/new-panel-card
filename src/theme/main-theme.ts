import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    customPrimary: Palette["primary"];
    customSecondary: Palette["secondary"];
    customText: Palette["text"];
    borderColor: {
      success: string;
      danger: string;
      warning: string;
      error: string;
      info: string;
    };
  }

  interface PaletteOptions {
    customPrimary: PaletteOptions["primary"];
    customSecondary: PaletteOptions["secondary"];
    customText: PaletteOptions["text"];
    borderColor?: {
      success?: string;
      danger?: string;
      warning?: string;
      error?: string;
      info?: string;
    };
  }
}

export const mainTheme = () =>
  createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "Yekan Bakh",
    },
    palette: {
      customPrimary: {
        main: "#787878",
        dark: "#262626",
        light: "#F6F6F6",
      },
      customSecondary: {
        main: "",
      },
      customText: {
        primary: "#787878",
        secondary: "",
      },
      warning: {
        main: "#D63C3C",
      },
      text: {
        primary: "#249153",
        secondary: "#D63C3C",
      },
      borderColor: {
        success: "#249153",
        danger: "#F2811D",
        warning: "#F2811D",
        error: "#D63C3C",
        info: "#2496C7",
      },
    },
  });
