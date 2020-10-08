import React from "react";
import { Tile } from "./components/Tile"
import poster from './images/poster.jpg'

function App() {
  return <>
      <Tile
        tileType={"movie"}
        header={"Mulan"}
        subheader={"2020"}
        poster={poster}
        place={"China, United States of America"}
        date={"24.10.2020"}
      ></Tile>
  </>;
}

export default App;
