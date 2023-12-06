import "styled-components";
import { StringLiteral } from "typescript";

declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    gray: string; // header color
    indigo: {
      basic: string;
      lighter: string;
    }; // logo color
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
  }
}
