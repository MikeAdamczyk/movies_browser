import React from 'react';
import { TileElement, Image, DetailBox, Header, Subheader, AdditionalInfoBox, AdditionalInfo, Genres, Genre} from './styled'


export const Tile = ({tileType, tileView, header, subheader, poster, place, date, genres}) => {
   
    return <TileElement >
        <Image src={poster}></Image>
        <DetailBox>
            <Header>{header}</Header>
            {tileType === "movie" ? <Subheader>{subheader}</Subheader> : ""}
            <AdditionalInfoBox>
                <AdditionalInfo>
                    {tileType === "movie" ? "Production:" : "Date of birth:"}
                </AdditionalInfo>
                <AdditionalInfo content>
                    {tileType === "movie" ? `${place}` : `${date}`}   
                </AdditionalInfo>
            </AdditionalInfoBox>
            <AdditionalInfoBox next>
                <AdditionalInfo>
                    {tileType === "movie" ? "Release date:" : "Place of birth:"}
                </AdditionalInfo>
                <AdditionalInfo content>
                    {tileType === "movie" ? `${date}` : `${place}`}
                </AdditionalInfo>
            </AdditionalInfoBox>
            {tileType === "movie" ? 
            <>
                <Genres>
                    {genres.map((genre) => 
                        <Genre key={genre}>
                            {genre}
                        </Genre>
                    )}
                </Genres>
            </> : ""}
        </DetailBox>
    </TileElement>
};