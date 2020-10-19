import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../../queryParameters";
import { fetchPeople, selectErrorStatus, selectLoadingStatus, selectPeople, selectTotalResults} from "../peopleSlice";
import { Footer } from "../../../common/Footer";
import { Title } from "../../../common/Title";
import { Tile } from "../../../common/Tile";
import { NoResult } from "../../NoResult";
import { Error } from "../../Error";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";
import { PAGE_PARAMETER, QUERY_PARAMETER } from "../../../lib/consts";

export const PeoplePage = () => {
  const query = useQueryParameter(QUERY_PARAMETER);
  const peopleResult = useSelector(selectPeople);
  const totalResults = useSelector(selectTotalResults);
  const searchingLoadingStatus = useSelector(selectLoadingStatus);
  const page = useQueryParameter(PAGE_PARAMETER);
  const errorStatus = useSelector(selectErrorStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!query || query === "") {
      dispatch(fetchPeople(page))
    }
  }, [dispatch, query, page]);

  return (
      <Wrapper DataType={"people"}>
        {searchingLoadingStatus ?
            <Title title={`Search results for "${query}"`}/>
            :
            !searchingLoadingStatus && query && totalResults === 0 ?
                <NoResult/>
                :
                errorStatus ?
                    <Error/>
                    :
                    <>
                      <Title title={(!query || query.trim() === "") ?
                          "Popular people" :
                          `Search results for "${query}" (${totalResults})`}/>
                      <ListContainer DataType={"people"}>
                        {peopleResult.map((result) => (
                            <Tile
                                key={result.id}
                                tileType={"people"} //movie / people
                                tileView={"list"} // list / detail
                                header={result.name}
                                image={result.profile_path}/>
                        ))}
                      </ListContainer>
                      <Footer/>
                    </>
        }
      </Wrapper>
  )
};
