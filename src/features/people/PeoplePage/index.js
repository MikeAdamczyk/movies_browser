import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBContainer } from "mdbreact";
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
import { Spinner, SpinnerBox } from "../../../common/Loading/styled";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";

export const PeoplePage = () => {
  const query = useQueryParameter(QUERY_PARAMETER);
  const peopleResult = useSelector(selectPeople);
  const totalResults = useSelector(selectTotalResults);
  const searchingLoadingStatus = useSelector(selectLoadingStatus);
  const page = useQueryParameter(PAGE_PARAMETER);
  const loading = useSelector(selectLoading);
  const errorStatus = useSelector(selectErrorStatus);
  const dispatch = useDispatch();
  const scrollContainerStyle = {maxHeight: "calc(100vh - 395px)" };

  useEffect(() => {
    if (!query || query === "") {
      dispatch(fetchPeople({page: 1}));
    }
  }, [dispatch, query]);

  useEffect(() => {
    if (!query || query === "") {
      dispatch(fetchPeople({page}));
    }
  }, [dispatch, page]);

  return (
      <Wrapper DataType={"people"}>
        {loading ?
            <SpinnerBox>
              <Spinner src={spinner}/>
            </SpinnerBox>
            :
            !loading && searchingLoadingStatus ?
                <>
                  <Title title={`Search results for "${query}"`}/>
                  <SpinnerBox search>
                    <Spinner src={spinner}/>
                  </SpinnerBox>
                </>
                :
                !loading && !searchingLoadingStatus && totalResults === 0 ?
                    <NoResult/>
                    :
                    !loading && !searchingLoadingStatus && errorStatus ?
                        <Error/>
                        :
                        <>
                          <Title
                              title={(!query || query.trim() === "") ? "Popular people" : `Search results for "${query}" (${totalResults})`}/>
                          <MDBContainer>
                              <ListContainer style={scrollContainerStyle} DataType={"people"}>
                            {peopleResult.map((result) => (
                                <Tile key={result.id} id={result.id} tileType={"people"}
                                      tileView={"list"}
                                      header={result.name}
                                      image={result.profile_path}/>
                            ))}
                          </ListContainer>
                          </MDBContainer>
                          <Footer/>
                        </>
        }
      </Wrapper>
  )
};