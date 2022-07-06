import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyle";
import App from "./app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Italiana&family=Source+Sans+Pro:wght@200&display=swap"
      rel="stylesheet"
    ></link>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles theme={theme} />
    </ThemeProvider>
  </React.StrictMode>
);
