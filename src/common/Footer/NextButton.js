import React from "react";
import {Arrow, ChangePageButton, ButtonTitle} from "./styled";
import disabled from "../../images/disabled.svg";
import active from "../../images/active.svg";
import {setNextPage, setLastPage, selectCurrentPage, selectTotalPages} from "../../features/movies/moviesSlice"
import {
    setPeopleNextPage,
    setPeopleLastPage,
    selectPeopleCurrentPage,
    selectPeopleTotalPages
} from "../../features/people/peopleSlice";
import {useDispatch, useSelector} from "react-redux";

export const NextButton = ({firstTitle, secondTitle}) => {
    const moviesCurrentPage = useSelector(selectCurrentPage);
    const peopleCurrentPage = useSelector(selectPeopleCurrentPage);
    const moviesTotalPages = useSelector(selectTotalPages);
    const peopleTotalPages = useSelector(selectPeopleTotalPages);

    const dispatch = useDispatch()
    return (
        window.location.href.includes("people") ?
            <>
                <ChangePageButton
                    onClick={() => {
                        dispatch(setPeopleNextPage())
                    }}
                    disabled={peopleCurrentPage === peopleTotalPages}
                >
                    <ButtonTitle
                        inactive={peopleCurrentPage === peopleTotalPages}
                        directionChange="right"
                    >
                        {firstTitle}
                    </ButtonTitle>
                    {peopleCurrentPage === peopleTotalPages ?
                        <Arrow back src={disabled}/>
                        :
                        <Arrow src={active}/>
                    }
                </ChangePageButton>
                <ChangePageButton
                    onClick={() => {
                        dispatch(setPeopleLastPage())
                    }}
                    directionChange
                    disabled={peopleCurrentPage === peopleTotalPages}
                >
                    <ButtonTitle
                        inactive={peopleCurrentPage === peopleTotalPages}
                        directionChange="right"
                    >
                        {secondTitle}
                    </ButtonTitle>
                    {peopleCurrentPage === peopleTotalPages ?
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
            :
            <>
                <ChangePageButton
                    onClick={() => {
                        dispatch(setNextPage())
                    }}
                    disabled={moviesCurrentPage === moviesTotalPages}
                >
                    <ButtonTitle
                        inactive={moviesCurrentPage === moviesTotalPages}
                        directionChange="right"
                    >
                        {firstTitle}
                    </ButtonTitle>
                    {moviesCurrentPage === moviesTotalPages ?
                        <Arrow back src={disabled}/>
                        :
                        <Arrow src={active}/>
                    }
                </ChangePageButton>
                <ChangePageButton
                    onClick={() => {
                        dispatch(setLastPage())
                    }}
                    directionChange
                    disabled={moviesCurrentPage === moviesTotalPages}>
                    <ButtonTitle
                        inactive={moviesCurrentPage === moviesTotalPages}
                        directionChange="right"
                    >
                        {secondTitle}
                    </ButtonTitle>
                    {moviesCurrentPage === moviesTotalPages ?
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
};