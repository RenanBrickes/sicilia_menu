import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyle";
import App from "./app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cardapio } from "./screen/cardapio/indext";
import { AppetizersMock } from "./mocks/AppetizersMock";
import { PastaMock } from "./mocks/PastaMock";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/Appetizers"
            element={<Cardapio data={AppetizersMock} />}
          />
          <Route path="/Pasta" element={<Cardapio data={PastaMock} />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles theme={theme} />
    </ThemeProvider>
  </React.StrictMode>
);
