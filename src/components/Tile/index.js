import React from 'react';
import { TileElement, Image, DetailBox, Header } from './styled'
import poster from '../../images/poster.jpg'

export const Tile = ({tileType, header}) => {
    return <TileElement >
        <Image src={poster}></Image>
        <DetailBox>
            <Header>{header}</Header>

        </DetailBox>
    </TileElement>
};