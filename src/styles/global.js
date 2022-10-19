import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background: var(--background);
    line-height: 1;
    color: var(--texts);
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--backgroundScrollBar); 
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrollBarColor); 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--contrast3); 
  }

  body {
    --scrollBarColor: #888;
    --backgroundScrollBar: #f1f1f1;
    --lightContrast: #bab4d4;
    --contrast: #77368e;
    --contrast2: #9644b3;
    --contrast3: #582869;
    --borders: #dedede;
    --borderFocus: #a3a0a0;
    --postColor: #111111;
    --texts: #555555;
    --disabled: #807c7a;
    --gray: #2a2a2a;
    --highlight: #f73859;
    --hover: #32969c;
    --mediumBackground: #f0f0f3;
    --background: #fafafa;
    --white: #ffffff;
    --black: #222;
  }
`;

export default GlobalStyles;
