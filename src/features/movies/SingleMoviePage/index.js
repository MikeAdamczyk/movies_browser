import React from "react";
import { Container } from "../../../common/Containers/index";
import { Footer } from "../../../common/Footer";
import { Title } from "../../../common/Title";
import { Backdrop, PosterBox, Poster, MovieInfo, MovieTitle, Star, Rate, RatingInfo, RatingSection, RateBox } from "./styled";
import bigPoster from "../../../images/backdrop.png";
import star from "../../../images/Vector.svg";


export const SingleMoviePage = () => {

    return (
        <>
            <Backdrop>

                <PosterBox>

                    <Poster src={bigPoster} />
                    <MovieInfo>
                        <MovieTitle>Mulan long title</MovieTitle>

                        <RatingSection>
                            <Star src={star} />
                            <RateBox>
                                <Rate>7,8</Rate>
                                <RatingInfo rate="rate">/ 10</RatingInfo>
                            </RateBox>
                        </RatingSection>

                        <RatingInfo>
                            322 votes
                        </RatingInfo>

                    </MovieInfo>

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