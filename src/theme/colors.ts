import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#E4BF6E",
  primaryBright: "#f9d17a",
  primaryDark: "#0098A1",
  secondary: "#3e3d43",
  success: "#84520f",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f5f5dc",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#e4e4bf",
  input: "#EFF4F5",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#3e3d43",
  textDisabled: "#BDC2C4",
  textSubtle: "#84520f",
  borderColor: "#E9EAEB",
  card: "#e4e4bf",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#191423",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
