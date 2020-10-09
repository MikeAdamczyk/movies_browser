import styled from "styled-components";

export const StyledNavigation = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 5px;
    margin: 0;
    margin-bottom: -10px;
    background: ${({ theme }) => theme.color.black};
    text-decoration :none;
    color: white;
`;

export const StyledItem = styled.li`
    color: white;
    margin: 16px;
    text-decoration: none;
`;