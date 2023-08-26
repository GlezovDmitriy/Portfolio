import React from 'react';
import styled from "styled-components";
import Icon from "../../../../components/icon/Icon";

const Skill = () => {
    return (
        <StyledSkill>
            <Icon iconId={"html"}/>
            <SkillTitle>html5</SkillTitle>
            <SkillText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`

`

const SkillTitle = styled.h3`

`

const SkillText = styled.div`

`
export default Skill;