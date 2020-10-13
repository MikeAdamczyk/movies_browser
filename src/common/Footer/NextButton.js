import React from "react";
import {Arrow, ChangePageButton, TextButton} from "./styled";
import disabled from "../../images/disabled.svg";
import active from "../../images/active.svg";

export const NextButton = ({firstTitle, secondTitle, currentPage, totalPages}) => {
    return (
        <>
            <ChangePageButton disabled={currentPage === totalPages}>
                <TextButton
                    inactive={currentPage === totalPages}
                    directionChange="right"
                >
                    {firstTitle}
                </TextButton>
                {currentPage === totalPages ?
                    <Arrow back src={disabled}/>
                    :
                    <Arrow src={active}/>
                }
            </ChangePageButton>
            <ChangePageButton directionChange disabled={currentPage === totalPages}>
                <TextButton
                    inactive={currentPage === totalPages}
                    directionChange="right"
                >
                    {secondTitle}
                </TextButton>
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