import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../../common/components/Container/index";
import Paging from "../../../common/components/Paging";
import { Title } from "../../../common/components/Title";
import { selectErrorStatus } from "../moviesSlice";
import { Error } from "../../Error";

export const SingleMoviePage = () => {

  //TODO: replace selectErrorStatus with select from detail
  const errorStatus = useSelector(selectErrorStatus());

  return (
      errorStatus ?
          <Error />
          :
          <>
            <Title title={"Singe Movie Page"}></Title>
            <Container>
              <p>
                Single Movie Page </p>
            </Container>

            <Paging/>
          </>
  )
};