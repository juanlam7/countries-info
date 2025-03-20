import { SvgList } from '@shared/interfaces/svg.interface';
import {
  byCapital,
  byCountry,
  byRegion,
  footerSvg,
  notFound,
} from '@shared/utils/svgIcons';

export const iconList: SvgList = {
  footerIcon: footerSvg,
  capitalIcon: byCapital,
  countryIcon: byCountry,
  regionIcon: byRegion,
  notFoundIcon: notFound,
};
