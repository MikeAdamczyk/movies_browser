import React from "react";
import { Container, TileExample } from "../../../common/components/Container/index";
import { Header } from "../../../common/components/Header/index";
import Paging from "../../../common/components/Paging";
import { Title } from "../../../common/components/Title";

export const MoviesPage = () => (
    <>
        <Header></Header>

        <Title title={"Popular movies"}></Title>

        <Container>
            <TileExample>1</TileExample>
            <TileExample>2</TileExample>
            <TileExample>3</TileExample>
            <TileExample>4</TileExample>
        </Container>

        <Paging></Paging>
    </>

);