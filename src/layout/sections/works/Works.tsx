import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import TabMenu from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/proj-1.webp'
import timerImg from '../../../assets/images/proj-2.webp'
import {Container} from "../../../components/Container";

export const worksItems = ["All", "landing page", "React", "spa"]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <Work title={"Social network"}
                          src={socialImg}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
                              " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim."}/>
                    <Work title={"Timer"}
                          src={timerImg}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
                              " sed do eiusmod tempor iLorem ipsum dolor sit amet, consectetur adipisicing elit," +
                              " sed do eiusmod tempor incididLorem ipsum dolor sit amet, consectetur adipisicing elit," +
                              " sed do eiusmod tempor incididncLorem ipsum dolor sit amet, consectetur adipisicing elit," +
                              " sed do eiusmod tempor incididididunt ut labore et dolore magna aliqua Ut enim."}/>
                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`