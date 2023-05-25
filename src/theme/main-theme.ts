import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    borderColor: {
      success: string;
      danger: string;
      warning: string;
      error: string;
      info: string;
      secondaryInfo:string
    };
    label: {
      background: {
        main: string;
        success: string;
        danger: string;
      };
      color: {
        main: string;
        success: string;
        danger: string;
      };
    };
    button: {
      mainColor: string;
    };
  }

  interface PaletteOptions {
    borderColor?: {
      success?: string;
      danger?: string;
      warning?: string;
      error?: string;
      info?: string;
      secondaryInfo?:string
    };
    label?: {
      background?: {
        main?: string;
        success?: string;
        danger?: string;
      };
      color?: {
        main?: string;
        success?: string;
        danger?: string;
      };
    };
    button?: {
      mainColor?: string;
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
      primary: {
        main: "#787878",
        dark: "#262626",
        light: "#F6F6F6",
      },

      borderColor: {
        success: "#249153",
        danger: "#E91E63",
        warning: "#F2811D",
        error: "#D63C3C",
        info: "#2496C7",
        secondaryInfo:"#00BCD4"
      },
      label: {
        background: {
          main: "#F6F6F6",
          success: "rgba(36, 145, 83, 0.1)",
          danger: "rgba(214, 60, 60, 0.1)",
        },
        color: {
          main: "#787878",
          success: "#249153",
          danger: "#D63C3C",
        },
      },
      button: {
        mainColor: "#6F63F2",
      },
    },
  });
