import React, { useEffect } from "react";
import { Backdrop } from "./backdrop";
import { DetailsContainer } from "./styled";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";
import { Title } from "../../../common/Title";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectPeople } from "../../people/peopleSlice";
import { Tile } from "../../../common/Tile";
import { useMovieDetail } from "../../useMovieDetail";


export const SingleMoviePage = () => {

    const { moviesResult } = useMovieDetail();
    console.log(moviesResult);
    const dispatch = useDispatch();
    const peopleResult = useSelector(selectPeople);

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch])

    return (
        <>
            <Backdrop />

            <DetailsContainer>

                <Wrapper tileView={"detail"}>
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

                <Wrapper DataType={"people"}>
                    <Title title={"Crew"} />
                    <ListContainer DataType={"people"}>
                        {peopleResult.map((result) => (
                            <Tile
                                key={result.id}
                                tileType={"people"} //movie / people
                                tileView={"list"} // list / detail
                                header={result.name}
                                subheader={result.name}
                                image={result.profile_path}
                            />
                        ))}
                    </ListContainer>
                </Wrapper>

                <Wrapper DataType={"people"}>
                    <Title title={"Cast"} />
                    <ListContainer DataType={"people"}>
                        {peopleResult.map((result) => (
                            <Tile
                                key={result.id}
                                tileType={"people"} //movie / people
                                tileView={"list"} // list / detail
                                header={result.name}
                                subheader={result.name}
                                image={result.profile_path}
                            />
                        ))}
                    </ListContainer>
                </Wrapper>

            </DetailsContainer>
        </>
    )
};