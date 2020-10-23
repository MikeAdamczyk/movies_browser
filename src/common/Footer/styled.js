import styled, { css } from 'styled-components';

export const Pagination = styled.footer`
    height: 36px;
    margin: 40px auto 103px;
    display: flex;
    align-items: center;
    justify-content: center;

   @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
       height: 24px;
       margin: 32px auto 31px;
    }
`;

export const ChangePageButton = styled.button`
    margin-right: 12px;
    padding: 8px 16px;
    height: 36px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.lightBlue};
    display: flex;
    align-items: center;
    
    &:hover{
     filter: brightness(105%);
     cursor: pointer;
    }

    &:disabled{
      background-color: ${({ theme }) => theme.color.grey};
        &:hover{
          filter: brightness(100%);
          cursor: default;
         }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      margin-right: 8px;
      padding: 8px 12px;
    }

    ${({ directionChange }) => directionChange && css`
        margin: 0;
        @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin: 0;
        }
    `}
`;

export const Arrow = styled.img`
    width: 7px;
    height: 11px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 5px;
        height: 8px;
    }

    ${({ directionChange }) => directionChange && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin-left: 4px;
        }
    `}

    ${({ hidden }) => hidden && css`
        display: none;
        @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
            display: unset;
        }
    `}

    ${({ back }) => back && css`
        transform: rotate(180deg);
    `}
`;

export const ButtonTitle = styled.span`
    color: ${({ theme }) => theme.color.darkGrey};
    font-size: 14px;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: none;
    }

    ${({ inactive }) => inactive && css`
        color: ${({ theme }) => theme.color.black};
    `}

    ${({ directionChange }) => directionChange === "left" && css`
        margin-left: 8px;
    `}

    ${({ directionChange }) => directionChange === "right" && css`
        margin-right: 8px;
    `}
`;

export const Text = styled.span`
    margin: 0 16px;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.darkerGrey};
    align-self: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0 8px;
    font-size: 10px;
    line-height: 2.4;
    }
`;

export const Number = styled.span`
    margin: 0 8px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0 2px;
    font-size: 10px;
    line-height: 2.4;
    }
`;