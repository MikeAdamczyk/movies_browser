import React from "react";
import { Tile } from "./components/Tile"
import poster from './images/poster.jpg'
import posterList from './images/posterlist.png'
import actor from './images/actor.png'

function App() {
  return <>
      <Tile
        tileType={"movie"} //movie / people
        tileView={"list"} // list / detail
        header={"Mulan"}
        subheader={"2020"}
        poster={posterList}
        place={"China, United States of America"}
        date={"24.10.2020"}
        genres={["Action", "Adventure", "Drama"]}
        rateValue={"7,8"}
        votesNumber={"35"}
        description={`A young Chinese maiden disguises herself as a male warrior in order to save her father. 
                      Disguises herself as a male warrior in order to save her father. 
                      A young Chinese maiden disguises herself as a male warrior in order to save her father.`
                    }
      ></Tile>
  </>;
}

export default App;
