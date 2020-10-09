import styled from "styled-components";

export const HeaderBox = styled.div`
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    max-height: 94px;
 `;

export const Subheader = styled.div`
    max-width: 1368px;
    height: 94px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
 `;