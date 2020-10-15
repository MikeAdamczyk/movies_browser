import React, { useEffect } from "react";
import Paging from "../../../common/components/Paging";
import { ListContainer, Wrapper } from "../../../common/components/Containers/styled";
import { Title } from "../../../common/components/Title";
import { store } from '../../../store';
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectPeople } from "../peopleSlice";
import { Tile } from "../../../common/components/Tile";


export const PeoplePage = () => {

    const dispatch = useDispatch();

    const peopleResult = useSelector(selectPeople);

    useEffect(() => {
      dispatch(fetchPeople());
  }, [dispatch])

 return     <Wrapper DataType={"people"}>
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
                <Paging />
            </Wrapper>
};
