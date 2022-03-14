import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  /* overflow-x: hidden; */
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  padding: 0 16px;
`;

export default GlobalStyle;