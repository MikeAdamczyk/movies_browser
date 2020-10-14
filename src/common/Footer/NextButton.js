import React from "react";
import {Arrow, ChangePageButton, ButtonTitle} from "./styled";
import disabled from "../../images/disabled.svg";
import active from "../../images/active.svg";

export const NextButton = ({firstTitle, secondTitle, currentPage, totalPages}) => {
    return (
        <>
            <ChangePageButton disabled={currentPage === totalPages}>
                <ButtonTitle
                    inactive={currentPage === totalPages}
                    directionChange="right"
                >
                    {firstTitle}
                </ButtonTitle>
                {currentPage === totalPages ?
                    <Arrow back src={disabled}/>
                    :
                    <Arrow src={active}/>
                }
            </ChangePageButton>
            <ChangePageButton directionChange disabled={currentPage === totalPages}>
                <ButtonTitle
                    inactive={currentPage === totalPages}
                    directionChange="right"
                >
                    {secondTitle}
                </ButtonTitle>
                {currentPage === totalPages ?
                    <>
                        <Arrow back src={disabled}/>
                        <Arrow directionChange back hidden src={disabled}/>
                    </>
                    :
                    <>
                        <Arrow src={active}/>
                        <Arrow directionChange hidden src={active}/>
                    </>
                }
            </ChangePageButton>
        </>
    )
}