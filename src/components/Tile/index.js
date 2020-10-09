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
   
    return  <TileElement 
                tileView={tileView}
            >
        <Image 
            src={poster}
            tileView={tileView}
        ></Image>
        <DetailBox 
            tileView={tileView}
        >
            <Header
                tileView={tileView}
            >
                {header}
            </Header>
            {tileType === "movie" ? <Subheader tileView={tileView}>{subheader}</Subheader> : ""}
            {tileView === "detail" ?
                <>
                    <Container 
                        tileView={tileView}
                    >
                        <AdditionalInfo>
                            {tileType === "movie" ? "Production:" : "Date of birth:"}
                        </AdditionalInfo>
                        <AdditionalInfo content>
                            {tileType === "movie" ? `${place}` : `${date}`}   
                        </AdditionalInfo>
                    </Container>
                    <Container 
                        next 
                        tileView={tileView}
                    >
                        <AdditionalInfo>
                            {tileType === "movie" ? "Release date:" : "Place of birth:"}
                        </AdditionalInfo>
                        <AdditionalInfo content>
                            {tileType === "movie" ? `${date}` : `${place}`}
                        </AdditionalInfo>
                    </Container>
                </> : 
            ""}
            {tileType === "movie" ? 
            <>
                <Container tileView={tileView}>
                    {genres.map((genre) => 
                        <Genre 
                            key={genre} 
                            tileView={tileView}
                        >
                            {genre}
                        </Genre>
                    )}
                </Container>
            </> : 
            ""}
            {tileType === "movie" ?
            <Container tileView={tileView}>
                <Star 
                    src={star} 
                    tileView={tileView}
                ></Star>
                <Rate 
                    number 
                    tileView={tileView}
                >
                    {rateValue}
                </Rate>
                {tileView === "detail" ?
                    <Rate 
                    tileView={tileView}
                >
                    / 10
                </Rate> :
                ""}
                
                <Rate 
                    votes 
                    tileView={tileView}
                >
                    {votesNumber} votes
                </Rate>
            </Container> 
            :
             ""}
            {tileView === "detail" ?
            <Container>
                <Description>
                    {description}
                </Description> 
            </Container> :
            ""}
        </DetailBox>
    </TileElement>
};