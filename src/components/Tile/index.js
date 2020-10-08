import React from 'react';
import { 
    TileElement, 
    Image, 
    DetailBox, 
    Header, 
    Subheader, 
    Container, 
    AdditionalInfo, 
    Genre, 
    Star, 
    Rate,
    Description } from './styled';
import star from '../../images/Vector.svg'


export const Tile = ({
    tileType, 
    tileView, 
    header, 
    subheader, 
    poster, 
    place, 
    date, 
    genres, 
    rateValue, 
    votesNumber, 
    description
    }) => {
   
    return <TileElement >
        <Image src={poster}></Image>
        <DetailBox>
            <Header>{header}</Header>
            {tileType === "movie" ? <Subheader>{subheader}</Subheader> : ""}
            <Container>
                <AdditionalInfo>
                    {tileType === "movie" ? "Production:" : "Date of birth:"}
                </AdditionalInfo>
                <AdditionalInfo content>
                    {tileType === "movie" ? `${place}` : `${date}`}   
                </AdditionalInfo>
            </Container>
            <Container next>
                <AdditionalInfo>
                    {tileType === "movie" ? "Release date:" : "Place of birth:"}
                </AdditionalInfo>
                <AdditionalInfo content>
                    {tileType === "movie" ? `${date}` : `${place}`}
                </AdditionalInfo>
            </Container>
            {tileType === "movie" ? 
            <>
                <Container>
                    {genres.map((genre) => 
                        <Genre key={genre}>
                            {genre}
                        </Genre>
                    )}
                </Container>
            </> : 
            ""}
            {tileType === "movie" ?
            <Container>
                <Star src={star}></Star>
                <Rate number>{rateValue}</Rate>
                <Rate>/ 10</Rate>
                <Rate votes>{votesNumber} votes</Rate>
            </Container> 
            :
             ""}
            <Container>
            <Description>{description}</Description>
            </Container>
        </DetailBox>
    </TileElement>
};