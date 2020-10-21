import React, { useEffect } from "react";
import { Backdrop } from "./backdrop";
import { DetailsContainer } from "./styled";
import { ListContainer, Wrapper } from "../../../common/Containers/styled";
import { Title } from "../../../common/Title";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectPeople } from "../../people/PeoplePopular/peopleSlice";
import { Tile } from "../../../common/Tile";
import { useMovieDetail } from "../../useMovieDetail";
import { Spinner, SpinnerBox } from "../../../common/Signs/styled";
import spinner from "../../../images/icon-spinner.svg";
import { selectLoading } from "../MovieDetail/movieDetailSlice";

export const SinglePage = ({match, detailType, listType}) => {

    const dispatch = useDispatch();
    const peopleResult = useSelector(selectPeople);
    const loading = useSelector(selectLoading);

    const id = match.params.id;
    
    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch])

    if (loading) {
        return (
            <SpinnerBox>
                <Spinner src={spinner} />
            </SpinnerBox>
        )
    }

    return (
        <>
            <Backdrop />

            <DetailsContainer>

                <Wrapper tileView={"detail"}>
                    <Tile
                        tileType={detailType} //movie / people
                        tileView={"detail"} // list / detail
                        header={"Mulan"}
                        subheader={"2020"}
                        image={"/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"}//mODcczqQyKuphfFAoBZGhxgnNfs.jpg / aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg
                        place={"Wuhan, Hubei, China"}
                        date={"24.10.2020"}
                        genres={["Action", "Drama", "Adventure"]}
                        rateValue={"7,6"}
                        votesNumber={"37"}
                        description={`A young Chinese maiden disguises herself as a male warrior in order to save her father.
                                Disguises herself as a male warrior in order to save her father.
                                A young Chinese maiden disguises herself as a male warrior in order to save her father.`}
                    ></Tile>
                </Wrapper>

                <Wrapper DataType={listType}>
                    <Title title={"Crew"} />
                    <ListContainer DataType={listType}>
                        {peopleResult.map((result) => (
                            <Tile
                                key={result.id}
                                id={result.id}
                                tileType={listType} //movie / people
                                tileView={"list"} // list / detail
                                header={result.name}
                                subheader={result.name}
                                image={result.profile_path}
                            />
                        ))}
                    </ListContainer>
                </Wrapper>

                <Wrapper DataType={listType}>
                    <Title title={"Cast"} />
                    <ListContainer DataType={listType}>
                        {peopleResult.map((result) => (
                            <Tile
                                key={result.id}
                                id={result.id}
                                tileType={listType} //movie / people
                                tileView={"list"} // list / detail
                                header={result.name}
                                subheader={result.name}
                                image={result.profile_path}
                            />
                        ))}
                    </ListContainer>
                </Wrapper>

            </DetailsContainer>
        </>
    )
};