import { createGlobalStyle } from "styled-components";
import GolosWoff2 from "../assets/fonts/Golos-Text_Regular.woff2";
import GolosWoff from "../assets/fonts/Golos-Text_Regular.woff";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul, ol {
  list-style-type: none;
  padding: 0;
}
a {
  text-decoration: none;
}
button, select, textarea, input {
  outline: none;
}
button, select, input[type="checkbox"] {
  cursor: pointer;
}
@font-face {
  font-family: "Golos";
  src: url(${GolosWoff2}) format("woff2"),
    url(${GolosWoff}) format("woff");
  font-weight: normal;
  font-style: normal;
}
body {
  font-family: "Golos";
  line-height: 1.5;
  font-size: 14px;
}
`;

export default GlobalStyles;
