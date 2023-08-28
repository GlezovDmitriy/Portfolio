import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Dmitriy</Name>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>
                        </SocialIconLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
                        </SocialIconLink>
                    </SocialItem>

                </SocialList>
                <Copyright>© 2023 Dmitriy Glezov, All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #cbc9c8;
  min-height: 30vh;
`
const Name = styled.span`

`
const SocialList = styled.ul`
display: flex;
  gap: 30px;
`
const SocialIconLink = styled.a`

`
const Copyright = styled.small`
`
const SocialItem = styled.li`
`