import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypeBackground {
    divider: string;
  }
  interface Palette {
    darkSurface: {
      main: string;
      button: string;
      icon: string;
      bg: string;
      sidebarText: string;
      divider: string;
      logo: string;
      text: string;
      textGray: string;
      textGreen: string;
      bgGold: string;
      detailIcons: string;
      bgDetails: string;
      bgGameDetail: string;
    },

    pagination: {
      text: string;
      selectedText: string;
      bg: string;
      bgHover: string;
    },

    footer: {
      rawg: string,
      text: string,
      bg: string,
      rawgText: string;
    },

    search: {
      main: string,
      hover: string,
      select: string
    }
  }

  interface PaletteOptions {
    darkSurface?: {
      main?: string;
      button?: string;
      icon?: string;
      bg?: string;
      sidebarText?: string;
      divider?: string;
      logo?: string;
      text?: string;
      textGreen?: string;
      textGray?: string;
      bgGold?: string;
      detailIcons?: string;
      bgDetails?: string;
      bgGameDetail?: string;
    },

    pagination: {
      text?: string,
      selectedText?: string,
      bg?: string,
      bgHover?: string
    },

    footer: {
      rawg?: string,
      text?: string,
      bg?: string,
      rawgText: string;
    },

    search?: {
      main?: string;
      hover?: string;
      select?: string;
    }
  }
}

export const theme = createTheme({
  palette: {
    background: {
      default: "#0f0f0f",
      paper: "#181818",
      divider: '#666',
    },

    darkSurface: {
      main: "#000000",
      button: 'rgba(37, 37, 37, 0.67)',
      bg: 'rgb(30, 30, 30)',
      icon: 'gray',
      sidebarText: 'gray',
      logo: 'rgb(216, 206, 3)',
      text: 'white',
      textGray: 'gray',
      bgGold: 'gold',
      textGreen: 'green',
      detailIcons: 'rgba(180, 175, 113, 0.68)',
      bgDetails: 'rgb(28, 25, 28)',
      bgGameDetail: 'rgb(30, 30, 30)',
    },
    
    pagination: {
      text: 'white',
      selectedText: 'white',
      bg: 'gold',
      bgHover: 'gray'
    },
    
    footer: {
      rawg: 'yellow',
      text: 'white',
      bg: '#000000',
      rawgText: 'gray',
    },

    search: {
      main: 'rgba(128, 128, 128, 0.33)',
      hover: 'rgba(230, 228, 230, 0.33)',
      select: '#d0bd46'
    },

    primary: {
      main: "#8b5cf6",
    },
  }
});