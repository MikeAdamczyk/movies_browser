import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${({ theme }) => theme.color.backgroundColor};
        margin: 0px auto 103px;
        line-height: 1.4;
        color: ${({ theme }) => theme.backgroundColor};
    }
`;