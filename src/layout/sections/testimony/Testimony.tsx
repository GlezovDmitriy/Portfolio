import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"html"}/>
                <Slider/>
            </FlexWrapper>

        </StyledTestimony>
);
};

const StyledTestimony = styled.section`
background-color: #e4bcf3;
min-height: 50vh;
align-items: center;
`
