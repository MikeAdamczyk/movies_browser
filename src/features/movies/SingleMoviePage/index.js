import React from "react";
import { PeopleList } from "../../people/PeoplePage/peopleList";
import { Backdrop } from "./backdrop";
import { DetailsContainer, ExampleTile } from "./styled";


export const SingleMoviePage = () => {

    return (
        <>
            <Backdrop />

            <DetailsContainer>

                <ExampleTile>
                    <p>Heloooooooo</p>
                    <p>Siemaaaaaaaaa</p>
                    <p>YouCode :D XD</p>
                </ExampleTile>

            <PeopleList/>

            </DetailsContainer>

        </>
    )
};