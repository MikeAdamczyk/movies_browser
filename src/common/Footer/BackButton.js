import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreviousPage, setFirstPage, selectCurrentPage } from "../../features/movies/MoviesPopular/moviesSlice";
import { setPeoplePreviousPage, setPeopleFirstPage, selectPeopleCurrentPage } from "../../features/people/PeoplePopular/peopleSlice";
import active from "../../images/active.svg"
import disabled from "../../images/disabled.svg"
import { Arrow, ChangePageButton, ButtonTitle } from "./styled";

export const BackButton = ({firstTitle, secondTitle}) => {
  const moviesCurrentPage = useSelector(selectCurrentPage);
  const peopleCurrentPage = useSelector(selectPeopleCurrentPage);
  const dispatch = useDispatch();

  return (
      window.location.href.includes("people") ?
          <>
            <ChangePageButton
                onClick={() => {dispatch(setPeopleFirstPage())}}
                disabled={peopleCurrentPage === 1}
            >
              {peopleCurrentPage === 1 ?
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
              < ButtonTitle directionChange="left" inactive={peopleCurrentPage === 1}>
                {firstTitle}
              </ButtonTitle>
            </ChangePageButton>
            <ChangePageButton
                onClick={() => dispatch(setPeoplePreviousPage())}
                directionChange
                disabled={peopleCurrentPage === 1}
            >
              {peopleCurrentPage === 1 ?
                  <Arrow src={disabled}/>
                  :
                  <Arrow back src={active}/>
              }
              < ButtonTitle directionChange="left" inactive={peopleCurrentPage === 1}>
                {secondTitle}
              </ButtonTitle>
            </ChangePageButton>
          </>
          :
          <>
            <ChangePageButton
                onClick={() => {dispatch(setFirstPage())}}
                disabled={moviesCurrentPage === 1}
            >
              {moviesCurrentPage === 1 ?
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
              < ButtonTitle directionChange="left" inactive={moviesCurrentPage === 1}>
                {firstTitle}
              </ButtonTitle>
            </ChangePageButton>
            <ChangePageButton
                onClick={() => dispatch(setPreviousPage())}
                directionChange
                disabled={moviesCurrentPage === 1}
            >
              {moviesCurrentPage === 1 ?
                  <Arrow src={disabled}/>
                  :
                  <Arrow back src={active}/>
              }
              <ButtonTitle directionChange="left" inactive={moviesCurrentPage === 1}>
                {secondTitle}
              </ButtonTitle>
            </ChangePageButton>
          </>
  )
};