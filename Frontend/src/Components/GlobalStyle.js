// src/Components/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial, sans-serif; }
  body { background: #f5f6fa; color: #333; }
  input, select, button { font-size: 14px; }
  button { cursor: pointer; }
`;

export default GlobalStyle;