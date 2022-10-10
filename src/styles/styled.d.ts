import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;

      success: string;
      red: string;

      aquaLight: string;
      aquaLighter: string;
      aquaDark: string;

      orange: string;
      orangeLight: string;
      orangeLighter: string;

      body: string;
      backgroundTransparent: string;
    };
  }
}
