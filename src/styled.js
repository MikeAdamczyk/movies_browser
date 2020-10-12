import styled from "styled-components";

export const Container = styled.div`
    /* width: 100%; */
    justify-content: center;
    max-width: 1368px;
    margin: 0 auto;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, 324px);
    grid-auto-rows: 650px;
`;