import styled from "styled-components";

export const Input = styled.input`
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid ${({ theme }) => theme.color.grey};
    box-sizing: border-box;
    border-radius: 33px;
    width: 432px;
    height: 48px;
`;