import styled from "styled-components";

export const Container = styled.div`
    max-width: 1368px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
`;

export const TileExample = styled.div`
    width: 324px;
    height: 650px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    background: white;
    color: red;
    padding: 30px;
    font-size: 24px;
`;