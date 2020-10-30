import React, { useState } from 'react';
import { StyledNavLink } from "../../common/CommonStyles/styled";
import plugMovie from '../../images/plugMovie.png'
import plugPerson from '../../images/plugPerson.png'
import star from '../../images/Vector.svg';
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
  Description,
  NoImagePlug,
  PlugLogo,
  ReadMore
} from './styled';

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
                       description,
                       id
                     }) => {
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => {
    setReadMore(readMore => !readMore)
  };

  return <TileElement tileView={tileView} tileType={tileType}>
    {tileView === "list" ?
        <StyledNavLink to={tileType === "movie" ? `/movies/${id}` : `/people/${id}`} tile={true}>
          <Image imagePath={image} tileView={tileView} tileType={tileType}>
            {image === null ?
                <NoImagePlug>
                  <PlugLogo tileType={tileType} src={tileType === "movie" ? plugMovie : plugPerson}/>
                </NoImagePlug> :
                ""
            }
          </Image>
        </StyledNavLink> :
        <Image imagePath={image} tileView={tileView} tileType={tileType}>
          {image === null ?
              <NoImagePlug>
                <PlugLogo src={plugMovie}/>
              </NoImagePlug> :
              ""
          }
        </Image>
    }
    <DetailBox tileView={tileView}>
      {tileView === "list" ?
          <StyledNavLink to={tileType === "movie" ? `/movies/${id}` : `/people/${id}`} tile={true}>
            <Header tileType={tileType} tileView={tileView}>
              {header}
            </Header>
          </StyledNavLink> :
          <Header tileType={tileType} tileView={tileView}>
            {header}
          </Header>
      }
      {subheader ? <Subheader tileView={tileView} tileType={tileType}>{subheader}</Subheader> : ""}
      {tileView === "detail" ?
          <>
            <Container tileView={tileView} additionalInfo>
              <AdditionalInfo label tileView={tileView} tileType={tileType}>
                {tileType === "movie" ? "Production:" :
                    (window.innerWidth < 648 && tileType === "people") ? 'Birth:' :
                        tileType === "people" ? "Date of birth:" : ""}
              </AdditionalInfo>
              <AdditionalInfo content tileView={tileView}>
                {(tileType === "movie" && place.length > 0)? `${place.map((country) => ` ${country}`)}` : `${date}`}
              </AdditionalInfo>
            </Container>
            <Container additionalInfo next tileView={tileView}>
              <AdditionalInfo label tileView={tileView} tileType={tileType}>
                {tileType === "movie" ? "Release date:" : 
                (tileType === "people" && place !== null) ? "Place of birth:" : ""}
              </AdditionalInfo>
              <AdditionalInfo content tileView={tileView}>
                {tileType === "movie" ? `${date}` : `${place}`}
              </AdditionalInfo>
            </Container>
          </> :
          ""}
      {(tileType === "movie" && genres) ?
          <>
            <Container tileView={tileView} genres>
              {genres.map((genre) =>
                  <Genre key={genre} tileView={tileView}>
                    {genre}
                  </Genre>
              )}
            </Container>
          </> :
          ""}
      {tileType === "movie" ?
          <Container tileView={tileView} rate>
            <Star src={star} tileView={tileView}/>
            <Rate number tileView={tileView}>
              {rateValue}
            </Rate>
            <Rate votes tileView={tileView}>
              {votesNumber} votes
            </Rate>
          </Container>
          :
          ""}
    </DetailBox>
    {(tileView === "detail") ?
        <Container description tileView={tileView}>
          <Description>
              {description.length < 500  ? description : 
              (description.length >= 500 && !readMore) ? <>{description.substring(0, 501)}...<ReadMore onClick={toggleReadMore}>read more</ReadMore></> 
              : <>{description}<ReadMore onClick={toggleReadMore}>read less</ReadMore></> }              
          </Description>
        </Container> :
        ""
    }
  </TileElement>
  
};