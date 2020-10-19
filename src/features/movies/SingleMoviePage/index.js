import React, { useEffect } from "react";
import { Backdrop } from "./backdrop";
import { DetailsContainer, ExampleTile } from "./styled";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";
import { Title } from "../../../common/Title";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectPeople } from "../../people/peopleSlice";
import { Tile } from "../../../common/Tile";

export const SingleMoviePage = () => {

    const dispatch = useDispatch();

    const peopleResult = useSelector(selectPeople);

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch])

    return (
        <>
            <Backdrop />

            <DetailsContainer>

                <ExampleTile>
                    Helooooooooooooo :D
                </ExampleTile>

                <Wrapper DataType={"people"}>
                    <Title title={"Crew"} />
                    <ListContainer DataType={"people"}>
                        {peopleResult.map((result) => (
                            <Tile
                                key={result.id}
                                tileType={"people"} //movie / people
                                tileView={"list"} // list / detail
                                header={result.name}
                                image={result.profile_path}
                            />
                        ))}
                    </ListContainer>
                </Wrapper>

            </DetailsContainer>
        </>
    )
};