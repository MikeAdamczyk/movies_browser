import React from "react";
import active from "../../images/active.svg"
import disabled from "../../images/disabled.svg"
import {Arrow, ChangePageButton, TextButton} from "./styled";

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
                < TextButton
                    directionChange="left"
                    inactive={currentPage === 1}
                >
                    {firstTitle}
                </TextButton>
            </ChangePageButton>
            <ChangePageButton directionChange disabled={currentPage === 1}>
                {currentPage === 1 ?
                    <Arrow src={disabled}/>
                    :
                    <Arrow back src={active}/>
                }
                < TextButton
                    directionChange="left"
                    inactive={currentPage === 1}
                >
                    {secondTitle}
                </TextButton>
            </ChangePageButton>
        </>
    )
}