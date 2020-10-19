import React, { useEffect } from "react";
import { Footer } from "../../../common/Footer";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";
import { Title } from "../../../common/Title";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectPeople } from "../peopleSlice";
import { Tile } from "../../../common/Tile";

export const PeoplePage = () => {

    const dispatch = useDispatch();

    const peopleResult = useSelector(selectPeople);

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch])

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
