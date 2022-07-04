import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./screen/menu/menu";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Italiana&family=Source+Sans+Pro:wght@200&display=swap"
      rel="stylesheet"
    ></link>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <ThemeProvider theme={theme}>
      <Menu />
      <GlobalStyles theme={theme} />
    </ThemeProvider>
  </React.StrictMode>
);
