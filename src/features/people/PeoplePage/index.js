import React from "react";
import Paging from "../../../common/components/Paging";
import { Container } from "../../../common/components/Container/index";
import { Title } from "../../../common/components/Title";

export const PeoplePage = () => (
    <>
        <Title title={"People"}></Title>
        <Container>
            <p>
                People
            </p>
        </Container>

        <Paging />
    </>
);