import React from "react";
import { Title } from "../../common/Title";
import { useQueryParameter } from "../../hooks/queryParameters";
import { QUERY_PARAMETER } from "../../lib/consts";
import noResultPicture from "../../images/noResult.png"
import { Image } from "./styled"

export const NoResult = () => {
  const query = useQueryParameter(QUERY_PARAMETER);

  return (
      <>
        <Title title={`Sorry, there are no results for "${query}"`}/>
        <Image src={noResultPicture} alt=""/>
      </>
  )
};