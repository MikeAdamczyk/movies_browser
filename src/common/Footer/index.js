import React from "react";
import {useSelector} from "react-redux";
import {selectCurrentPage, selectTotalPages} from "../../features/movies/MoviesPopular/moviesSlice";
import {Pagination, Text, Number} from "./styled";
import {BackButton} from "./BackButton";
import {NextButton} from "./NextButton";

export const Footer = () => {
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);

    return (
        <Pagination>
            <BackButton
                firstTitle="First"
                secondTitle="Previous"
                currentPage={currentPage}
            />
            <Text>Page <Number>{currentPage}</Number> of <Number>{totalPages}</Number></Text>
            <NextButton
                firstTitle="Next"
                secondTitle="Last"
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </Pagination>
    )
};