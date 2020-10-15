import React, {useEffect} from "react";
import {Footer} from "../../../common/Footer";
import {ListContainer, Wrapper} from "../../../common/Containers/styled";
import {Title} from "../../../common/Title";
import {useDispatch, useSelector} from "react-redux";
import {fetchPeople, getSearchedPeople} from "../peopleSlice";
import {Tile} from "../../../common/Tile";
import {useQueryParameter} from "../../queryParameters";
import {QUERY_PARAMETER} from "../../../lib/consts";

export const PeoplePage = () => {
    const query = useQueryParameter(QUERY_PARAMETER);
    const peopleResult = useSelector((state) => getSearchedPeople(state, query));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch]);

    return <Wrapper DataType={"people"}>
        <Title title={"Popular people"}></Title>
        <ListContainer DataType={"people"}>
            {peopleResult.map((result) => (
                    <Tile
                        key={result.id}
                        tileType={"people"} //movie / people
                        tileView={"list"} // list / detail
                        header={result.name}
                        image={result.profile_path}
                    ></Tile>
                )
            )
            }
        </ListContainer>
        <Footer/>
    </Wrapper>
};
