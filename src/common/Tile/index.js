import React from 'react';
import { StyledNavLink } from "../../common/Header/Menu/Navigation/styledNavLink";
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
    Description
} from './styled';
import star from '../../images/Vector.svg';

export const Tile = ({
    tileType,
    tileView,
    header,
    subheader,
    image,
    place,
    date,
    genres,
    rateValue,
    votesNumber,
    description
    }) => {
    return  <TileElement 
                tileView={tileView}
                tileType={tileType}
                // no idea how to pass tileView={tileView} to every child without writing it down in each, as I did now
                //any ideas?
            >
        {tileView === "list" ? 
            <StyledNavLink to="/single" tile={true}>        
                <Image 
                    imagePath={image}
                    tileView={tileView}
                    tileType={tileType}
                ></Image>
            </StyledNavLink> :
            <Image
                imagePath={image}
                tileView={tileView}
                tileType={tileType}
            ></Image>
        }
        <DetailBox
            tileView={tileView}
        >
        <StyledNavLink to="/single" tile={true}> 
            <Header
                tileType={tileType}
                tileView={tileView}
            >
                {header}
            </Header>
        </StyledNavLink>
            {(tileType === "movie" && subheader)? <Subheader tileView={tileView}>{subheader}</Subheader> : ""}
            {tileView === "detail" ?
                <>
                    <Container
                        tileView={tileView}
                        additionalInfo
                    >
                        <AdditionalInfo
                            label
                            tileView={tileView}
                            tileType={tileType}
                        >
                            {tileType === "movie" ? "Production:" :
                                (window.innerWidth < 648 && tileType === "people") ? 'Birth:' :
                                    /*^^ to be worked out, as for now works only after reloading*/
                                    tileType === "people" ? "Date of birth:" : ""}
                        </AdditionalInfo>
                        <AdditionalInfo
                            content
                            tileView={tileView}
                        >
                            {tileType === "movie" ? `${place}` : `${date}`}
                        </AdditionalInfo>
                    </Container>
                    <Container
                        additionalInfo
                        next
                        tileView={tileView}
                    >
                        <AdditionalInfo
                            label
                            tileView={tileView}
                            tileType={tileType}
                        >
                            {tileType === "movie" ? "Release date:" : "Place of birth:"}
                        </AdditionalInfo>
                        <AdditionalInfo
                            content
                            tileView={tileView}
                        >
                            {tileType === "movie" ? `${date}` : `${place}`}
                        </AdditionalInfo>
                    </Container>
                </> :
                ""}
            {(tileType === "movie" && genres) ?
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
                    <Rate
                        votes
                        tileView={tileView}
                    >
                        {votesNumber} votes
                        </Rate>
                </Container>

                :
                ""}

        </DetailBox>
        {
            (tileView === "detail") ?
                <Container
                    description
                    tileView={tileView}
                >
                    <Description>
                        {description}
                    </Description>
                </Container> :
                ""
        }
    </TileElement >
};