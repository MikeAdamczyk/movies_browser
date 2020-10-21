import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../../queryParameters";
import { Footer } from "../../../common/Footer";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";
import { Title } from "../../../common/Title";
import { Tile } from "../../../common/Tile";
import { PAGE_PARAMETER, QUERY_PARAMETER } from "../../../lib/consts";
import { Spinner, SpinnerBox } from "../../../common/Signs/styled";
import spinner from "../../../images/icon-spinner.svg";
import { NoResult } from "../../NoResult";
import { Error } from "../../Error";
import {
    fetchPeople,
    selectLoadingStatus,
    selectPeople,
    selectTotalResults,
    selectLoading,
    selectErrorStatus
} from "../PeoplePopular/peopleSlice";

export const PeoplePage = () => {
    const query = useQueryParameter(QUERY_PARAMETER);
    const peopleResult = useSelector(selectPeople);
    const totalResults = useSelector(selectTotalResults);
    const searchingLoadingStatus = useSelector(selectLoadingStatus);
    const page = useQueryParameter(PAGE_PARAMETER);
    const loading = useSelector(selectLoading);
    const errorStatus = useSelector(selectErrorStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!query || query === "") {
            dispatch(fetchPeople(page))
        }
    }, [dispatch, query, page]);

    if (loading) {
        return (
            <SpinnerBox>
                <Spinner src={spinner} />
            </SpinnerBox>
        )
    } else if (searchingLoadingStatus) {
        return (
            <Wrapper>
                <Title title={`Search results for "${query}"`} />
                <SpinnerBox>
                    <Spinner src={spinner} />
                </SpinnerBox>
            </Wrapper>
        )
    } else if (!searchingLoadingStatus && query && totalResults === 0) {
        return <NoResult />
    } else if (errorStatus) { return <Error /> }

    return (
        <Wrapper DataType={"people"}>
            <>
                <Title
                    title={(!query || query.trim() === "") ? "Popular people" : `Search results for "${query}" (${totalResults})`} />
                <ListContainer DataType={"people"}>
                    {peopleResult.map((result) => (
                        <Tile
                            key={result.id}
                            tileType={"people"} //movie / people
                            tileView={"list"} // list / detail
                            header={result.name}
                            image={result.profile_path}
                        />
                    ))}
                </ListContainer>
            </>
            <Footer />
        </Wrapper>
    )
};