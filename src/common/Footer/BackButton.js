import React from "react";
import active from "../../images/active.svg"
import disabled from "../../images/disabled.svg"
import {Arrow, ChangePageButton, ButtonTitle} from "./styled";

export const BackButton = ({firstTitle, secondTitle, currentPage}) => {
    return (
        <>
            <ChangePageButton disabled={currentPage === 1}>
                {currentPage === 1 ?
                    <>
                        <Arrow hidden src={disabled}/>
                        <Arrow directionChange src={disabled}/>
                    </>
                    :
                    <>
                        <Arrow back hidden src={active}/>
                        <Arrow directionChange back src={active}/>
                    </>
                }
                < ButtonTitle
                    directionChange="left"
                    inactive={currentPage === 1}
                >
                    {firstTitle}
                </ButtonTitle>
            </ChangePageButton>
            <ChangePageButton directionChange disabled={currentPage === 1}>
                {currentPage === 1 ?
                    <Arrow src={disabled}/>
                    :
                    <Arrow back src={active}/>
                }
                < ButtonTitle
                    directionChange="left"
                    inactive={currentPage === 1}
                >
                    {secondTitle}
                </ButtonTitle>
            </ChangePageButton>
        </>
    )
}