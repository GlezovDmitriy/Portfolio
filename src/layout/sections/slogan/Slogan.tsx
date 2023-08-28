import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {SectionTitle} from "../../../components/SectionTitle";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  background-color: #dcd497;
  min-height: 50vh;
`