import React from "react";
import {useSelector} from "react-redux";
import {selectCurrentPage, selectTotalPages} from "../../features/movies/moviesSlice";
import {Pagination, ChangePageButton, TextButton, Text, Number} from "./styled";
import {BackIcon, NextIcon} from "../Icons/Icons";

export const Footer = () => {
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);

    return (
        <Pagination>
            <ChangePageButton disabled={currentPage === 1}>
                <BackIcon/>
                <TextButton
                    directonChange="left"
                    inactive={currentPage === 1}
                >
                    {`First`}
                </TextButton>
            </ChangePageButton>
            <ChangePageButton disabled={currentPage === 1}>
                <BackIcon/>
                <TextButton
                    inactive={currentPage === 1}
                    directonChange="left"
                >
                    {`Previous`}
                </TextButton>
            </ChangePageButton>
            <Text>Page<Number>{currentPage}</Number>of<Number>{totalPages}</Number></Text>
            <ChangePageButton disabled={currentPage === totalPages}>
                <TextButton
                    inactive={currentPage === totalPages}
                    directonChange="right"
                >
                    {`Next`}
                </TextButton>
                <NextIcon/>
            </ChangePageButton>
            <ChangePageButton disabled={currentPage === totalPages}>
                <TextButton
                    inactive={currentPage === totalPages}
                    directonChange="right"
                >
                    {`Last`}
                </TextButton>
                <NextIcon/>
            </ChangePageButton>
        </Pagination>
    )
};