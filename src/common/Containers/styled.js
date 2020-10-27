import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    justify-content: center;
    max-width: 1400px;
    margin: 150px auto 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}){
        max-width: 1050px;

        ${(({ DataType }) => DataType === "people" && css`
            max-width: 915px;
        `)};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        max-width: 700px;

        ${({ tileView }) => tileView === "detail" && css`
            max-width: 767px;
        `}
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        max-width: 630px;


        ${(({ DataType }) => DataType === "people" && css`
            max-width: 450px;
        `)};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        max-width: 330px;
        margin-top: 166px;
    }
`;

export const ListContainer = styled.main`
    overflow-y: scroll;
    scrollbar-color: #330867 #f5f5f5;
    transition: all, 2s ease;
    justify-content: center;
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, 324px);

    ${(({ DataType }) => DataType === "people" && css`
        grid-template-columns: repeat(auto-fill, 208px);
    `)
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        grid-template-columns: repeat(auto-fill, 288px);

        ${(({ DataType }) => DataType === "people" && css`
            grid-template-columns: repeat(3, 135px);
            grid-gap: 16px;
        `)};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        margin-left: 16px;
        margin-right: 16px;

        ${(({ DataType }) => DataType === "people" && css`
            grid-template-columns: repeat(2, 135px);
            grid-gap: 16px;
        `)};
    }
    
    &::-webkit-scrollbar-track {
     -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: #F5F5F5;
      border-radius: 10px; 
    }
    
    &::-webkit-scrollbar {
      width: 10px;
      background-color: #F5F5F5; 
      }
      
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-image: -webkit-gradient(linear, left bottom, left top, from(#30cfd0), to(#330867));
      background-image: -webkit-linear-gradient(bottom, #30cfd0 0%, #330867 100%);
      background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); 
      }
    }
`;
