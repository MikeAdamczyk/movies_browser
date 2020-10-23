import React from "react";
import {
    Wrapper,
    PosterBox,
    Poster,
    MovieInfo,
    MovieTitle,
    Star,
    Rate,
    RatingInfo,
    RatingSection,
    RateBox,
} from "./styled";
import star from "../../images/Vector.svg";

export const Backdrop = ({backdrop, title, rate, votesNumber}) => (

        <Wrapper>
            <PosterBox>
                <Poster src={`https://image.tmdb.org/t/p/original/${backdrop}`} alt="" />
                <MovieInfo>
                    <MovieTitle>{title}</MovieTitle>
                    <RatingSection>
                        <RateBox>
                            <Star src={star} />
                            <Rate>{rate}</Rate>
                            <RatingInfo >/ 10</RatingInfo>
                        </RateBox>
                        <RatingInfo>
                            {votesNumber} votes
                        </RatingInfo>
                    </RatingSection>
                </MovieInfo>
            </PosterBox>
        </Wrapper>
);