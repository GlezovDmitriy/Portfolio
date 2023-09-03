import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <div>
                        <span>Hi There</span>
                        <h2>I am Dmitriy Glezov</h2>
                        <h1>A Web Developer.</h1>
                    </div>
                    <Photo src={photo} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>

    );
};

const StyledMain = styled.section`
min-height: 100vh;
  background-color: #d2bdc9;
`
const MainTitle = styled.h1`

`
const Name = styled.h2`

`


const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
export default Main;