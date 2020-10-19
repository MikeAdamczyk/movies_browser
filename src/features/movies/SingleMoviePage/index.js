import React from "react";
import { Wrapper } from "../../../common/Containers/styled";
import { Tile } from "../../../common/Tile";
import { useMovieDetail } from "../../../lib/useMovieDetail";

export const SingleMoviePage = () => {
    const {getProductionYear, getMovieGenres, moviesResult} = useMovieDetail();

    return <Wrapper tileView={"detail"}>
                <Tile
                    tileType={"movie"} //movie / people
                    tileView={"detail"} // list / detail
                    header={"Scarlett Johansson"}
                    subheader={"2020"}
                    image={"/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"}//mODcczqQyKuphfFAoBZGhxgnNfs.jpg / aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg
                    place={"Wuhan, Hubei, China"}
                    date={"24.10.2020"}
                    genres={["Action", "Drama", "Adventure"]}
                    rateValue={"7,6"}
                    votesNumber={"37"}
                    description={`A young Chinese maiden disguises herself as a male warrior in order to save her father. 
                                Disguises herself as a male warrior in order to save her father.  
                                A young Chinese maiden disguises herself as a male warrior in order to save her father.`}
                ></Tile> 
            </Wrapper>
};