import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme"
import "./App.css";
import { Tile } from "./components/Tile"

function App() {
  return <>
    <ThemeProvider theme={theme}>
      <Tile></Tile>
    </ThemeProvider>
  </>;
}

export default App;
