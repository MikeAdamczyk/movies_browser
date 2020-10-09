import React from "react";
import { TitleBox, MainTitle } from "./styled";

export const Title = ({ title }) => (
    <TitleBox>
        <MainTitle>
            {title}
        </MainTitle>
    </TitleBox>
);