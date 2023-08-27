import React from 'react';
import styled from "styled-components";
import Icon from "../../../../components/icon/Icon";


type SkillPropsType = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill >
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
width: 30%;
  text-align: center;
  background-color: #f3e3c9;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid gray;
  box-shadow: 2px 2px gray;
`

const SkillTitle = styled.h3`

`

const SkillText = styled.div`

`
export default Skill;