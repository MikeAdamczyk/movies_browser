import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectCurrentPage, selectTotalPages} from "../../features/movies/MoviesPopular/moviesSlice";
import {selectPeopleCurrentPage, selectPeopleTotalPages} from "../../features/people/PeoplePopular/peopleSlice";
import {useChangePageParameter} from "../../hooks/queryParameters";
import {BackButton} from "./BackButton";
import {NextButton} from "./NextButton";
import {PAGE_PARAMETER} from "../../lib/consts";
import {Pagination, Text, Number} from "./styled";

export const Footer = () => {
    const PageParameterChange = useChangePageParameter();
    const moviesCurrentPage = useSelector(selectCurrentPage);
    const moviesTotalPages = useSelector(selectTotalPages);
    const peopleCurrentPage = useSelector(selectPeopleCurrentPage);
    const peopleTotalPages = useSelector(selectPeopleTotalPages);

    useEffect(() => {
        PageParameterChange({
            key: PAGE_PARAMETER,
            value: window.location.href.includes("people") ?
                peopleCurrentPage <= peopleTotalPages ? peopleCurrentPage : peopleTotalPages
                :
                moviesCurrentPage <= moviesTotalPages ? moviesCurrentPage : moviesTotalPages
        });
    }, [moviesCurrentPage, peopleCurrentPage]);

    return (
        <Pagination>
            <BackButton
                firstTitle="First"
                secondTitle="Previous"
            />
            {window.location.href.includes("people") ?
                <Text>Page <Number>{peopleCurrentPage}</Number> of <Number>{peopleTotalPages}</Number></Text>
                :
                <Text>Page <Number>{moviesCurrentPage}</Number> of <Number>{moviesTotalPages}</Number></Text>
            }
            <NextButton
                firstTitle="Next"
                secondTitle="Last"
            />
        </Pagination>
    )
};