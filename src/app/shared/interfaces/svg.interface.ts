export interface SvgNames {
  footerIcon: string;
  capitalIcon: string;
  countryIcon: string;
  regionIcon: string;
  notFoundIcon: string;
}

export type SvgList = Record<keyof SvgNames, string>;
