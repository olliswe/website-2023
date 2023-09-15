import {globalFontFace, globalStyle} from '@vanilla-extract/css';
import { createAppStylesBaseline } from '@arwes/react';
import { theme } from 'src/theme';

const stylesBaseline = createAppStylesBaseline(theme);

Object.keys(stylesBaseline).forEach(styleName => {
  globalStyle(styleName, stylesBaseline[styleName]);
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontWeight: 300
});

const contentFont = "oli-regular";

globalFontFace(contentFont, {
  src: "url(/assets/fonts/oli-regular.woff2) format('woff2')",
  fontWeight: 400,
  fontStyle: 'normal',
  fontDisplay: 'swap'
});

globalStyle(`
  :where(
    h1:not(:first-child),
    h2:not(:first-child),
    h3:not(:first-child)
  )
`, {
  marginTop: theme.space(12)
});
