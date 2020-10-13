import React from "react";
import { Container } from "../../../common/components/Container/index";
import Paging from "../../../common/components/Paging";
import { Title } from "../../../common/components/Title";

export const SingleMoviePage = () => (
    <>
        <Title title={"Singe Movie Page"}></Title>
        <Container>
            <p>
                Single Movie Page
            </p>
        </Container>

        <Paging />
    </>
);