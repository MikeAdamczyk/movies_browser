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
import bigPoster from "../../../images/backdrop.png";
import star from "../../../images/Vector.svg";

export const Backdrop = () => {

    const backdropImage = bigPoster;

    return !!backdropImage && (
        <Wrapper>
            <PosterBox>
                <Poster src={backdropImage} alt="" />
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
        </Wrapper>
    );
};