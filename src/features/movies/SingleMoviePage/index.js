import React from "react";
import { Container } from "../../../common/Containers/index";
import { Footer } from "../../../common/Footer";
import { Title } from "../../../common/Title";
import { Backdrop, PosterBox, Poster } from "./styled";
import bigPoster from "../../../images/backdrop.png";


export const SingleMoviePage = () => {

    return (
        <>
            <Backdrop>
                <PosterBox>
                    <Poster src={bigPoster} />
                </PosterBox>
            </Backdrop>

            <Title title={"Single Movie Page"}></Title>
            <Container section="movies">
                <p>
                    Single Movie Page
                </p>
            </Container>

            <Footer />
        </>
    )
};