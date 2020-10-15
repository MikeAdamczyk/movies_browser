import React from "react";
import { Container } from "../../../common/Containers/index";
import { Title } from "../../../common/Title";
import { Footer } from "../../../common/Footer/index";

export const MoviesPage = () => (
    <>
        <Title title={"Popular movies"}></Title>

        <Container section="movies">
            <p>
                Popular movies page
            </p>
        </Container>
        <Footer />
    </>
);