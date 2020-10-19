import React from "react";
import dangerImage from "../../images/Danger.png"
import { SectionTitle } from "../../common/Title/styled";
import { Image, Wrapper, AdditionalInfo, StyledNavLink } from "./styled";

export const Error = () => {
  return (
      <>
        <Wrapper>
          <Image src={dangerImage} alt={""} />
          <SectionTitle>Ooops! Something went wrong...</SectionTitle>
          <AdditionalInfo>Please check your network connection <br/> and try again</AdditionalInfo>
          <StyledNavLink to="/movies">Back to home page</StyledNavLink>
        </Wrapper>
      </>
  )
};