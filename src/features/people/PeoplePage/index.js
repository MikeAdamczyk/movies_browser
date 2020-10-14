import React from "react";
import { PeopleContainer } from "../../../common/Containers/index";
import { Title } from "../../../common/Title";
import { Footer } from "../../../common/Footer/index";

export const PeoplePage = () => (
    <>
        <Title title={"People"}></Title>
        <PeopleContainer>
            <p>
                People
            </p>
        </PeopleContainer>

        <Footer />
    </>
);