import React from "react";
import { TitleBox, SectionTitle } from "./styled";

export const Title = ({ title }) => (
    <TitleBox>
        <SectionTitle>
            {title}
        </SectionTitle>
    </TitleBox>
);