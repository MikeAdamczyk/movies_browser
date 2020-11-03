import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FadeIn from "react-fade-in";
import { useQueryParameter } from "../../../hooks/queryParameters";
import {
    fetchPeople,
    selectLoadingStatus,
    selectPeople,
    selectTotalResults,
    selectLoading,
    selectErrorStatus
} from "../PeoplePopular/peopleSlice";
import { Footer } from "../../../common/Footer";
import { Title } from "../../../common/Title";
import { Tile } from "../../../common/Tile";
import { NoResult } from "../../../common/NoResult";
import { Error } from "../../../common/Error";
import spinner from "../../../images/icon-spinner.svg";
import { PAGE_PARAMETER, QUERY_PARAMETER } from "../../../lib/consts";
import { Spinner, SpinnerBox } from "../../../common/Spinner/styled";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";
import { SearchButton } from "../../../common/Header/Menu/Navigation/styled";

export const PeoplePage = () => {
    const query = useQueryParameter(QUERY_PARAMETER);
    const peopleResult = useSelector(selectPeople);
    const totalResults = useSelector(selectTotalResults);
    const searchingLoadingStatus = useSelector(selectLoadingStatus);
    const page = useQueryParameter(PAGE_PARAMETER);
    const loading = useSelector(selectLoading);
    const errorStatus = useSelector(selectErrorStatus);
    const dispatch = useDispatch();

    const [position, setPosition] = useState("hideButton");

    useEffect(() => {
        document.addEventListener("scroll", e => {
            let pagePosition = document.scrollingElement.scrollTop;
            if (pagePosition >= 1000) {
                setPosition("showButton")
            } else {
                setPosition("hideButton")
            }
        })
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        if (!query || query === "") {
            dispatch(fetchPeople({ page: "1" }));
        }
    }, [dispatch, query]);

    useEffect(() => {
        if ((!query || query === "") && !loading) {
            dispatch(fetchPeople({ page }));
        }
    }, [dispatch, page]);

    return (
        <Wrapper DataType={"peoplePage"}>
            {loading ?
                <SpinnerBox>
                    <Spinner src={spinner} />
                </SpinnerBox>
                :
                !loading && searchingLoadingStatus ?
                    <>
                        <Title title={`Search results for "${query}"`} />
                        <SpinnerBox search>
                            <Spinner src={spinner} />
                        </SpinnerBox>
                    </>
                    :
                        !loading && !searchingLoadingStatus && totalResults === 0 ?
                            <NoResult />
                            :
                            !loading && !searchingLoadingStatus && errorStatus ?
                                <Error />
                                :
                                <FadeIn delay={50} transitionDuration={300}>
                                    <Title
                                        title={(!query || query.trim() === "") ? "Popular people" : `Search results for "${query}" (${totalResults})`} />
                                    <ListContainer DataType={"people"}>
                                        {peopleResult.map((result) => (
                                            <Tile key={result.id} id={result.id} tileType={"people"}
                                                tileView={"list"}
                                                header={result.name}
                                                image={result.profile_path} />
                                        ))}
                                    </ListContainer>
                                    <SearchButton
                                        position={position}
                                        title="Scroll to the top"
                                        onClick={scrollTop}
                                    >
                                        ^
                                    </SearchButton>
                                    <Footer />
                                </FadeIn>
            }
        </Wrapper>
    )
};