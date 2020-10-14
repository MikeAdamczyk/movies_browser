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
                // no idea how to pass tileView={tileView} to every child without writing it down in each, as I did now
                //any ideas?
            >
        <Image 
            posterPath={poster}
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
            {(tileType === "movie" && subheader)? <Subheader tileView={tileView}>{subheader}</Subheader> : ""}
            {tileView === "detail" ?
                <>
                    <Container 
                        tileView={tileView}
                        additionalInfo
                    >
                        <AdditionalInfo>
                            {tileType === "movie" ? "Production:" : "Date of birth:"}
                        </AdditionalInfo>
                        <AdditionalInfo content>
                            {tileType === "movie" ? `${place}` : `${date}`}   
                        </AdditionalInfo>
                    </Container>
                    <Container 
                        additionalInfo
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
            {(tileType === "movie" && genres)? 
            <>
                <Container 
                    tileView={tileView}
                    genres
                >
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
            <Container 
                tileView={tileView}
                rate
            >
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
            {(tileView === "detail" )?
            <Container description>
                <Description>
                    {description}
                </Description> 
            </Container> :
            ""}
        </DetailBox>
    </TileElement>
};