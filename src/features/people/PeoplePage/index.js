import React from "react";
import { Container } from "../../../common/Containers/index";
import { Title } from "../../../common/Title";
import { Footer } from "../../../common/Footer/index";

export const PeoplePage = () => (
    <>
        <Title title={"People"}></Title>
        <Container section="people">
            <p>
                People
            </p>
        </Container>

        <Footer />
    </>
);