import React from "react";
import { MoviesContainer } from "../../../common/Containers/index";
import { Title } from "../../../common/Title";
import { Footer } from "../../../common/Footer/index";

export const MoviesPage = () => (
    <>
        <Title title={"Popular movies"}></Title>

        <MoviesContainer>
            <p>
                Popular movies page
            </p>
        </MoviesContainer>
        <Footer />
    </>
);