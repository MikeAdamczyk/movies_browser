import React from "react";
import Paging from "../../../common/components/Paging";
import { MoviesContainer } from "../../../common/components/Containers/index";
import { Title } from "../../../common/components/Title";

export const MoviesPage = () => (
    <>
        <Title title={"Popular movies"}></Title>

        <MoviesContainer>
            <p>
                Popular movies page
            </p>
        </MoviesContainer>

        <Paging />
    </>
);