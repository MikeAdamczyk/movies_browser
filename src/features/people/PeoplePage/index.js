import React from "react";
import Paging from "../../../common/components/Paging";
import { PeopleContainer } from "../../../common/components/Containers/index";
import { Title } from "../../../common/components/Title";

export const PeoplePage = () => (
    <>
        <Title title={"People"}></Title>
        <PeopleContainer>
            <p>
                People
            </p>
        </PeopleContainer>

        <Paging />
    </>
);