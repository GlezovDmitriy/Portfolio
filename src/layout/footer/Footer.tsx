import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

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
  background-color: ${theme.colors.primeryBg};
  padding: 40px 0;
`
const Name = styled.span`
  ${font({family: "'Josefin Sans',sans-serif", weight: 700, Fmax: 22, Fmin: 16 })}
  /*font-family: 'Josefin Sans',sans-serif;
  font-size: 22px;
  font-weight: 700;*/
  letter-spacing: 3px;
  
  
`
const SocialList = styled.ul`
display: flex;
  gap: 30px;
  margin: 30px 0;
`
const SocialIconLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.10);
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  
  &:hover {
    color: ${theme.colors.primeryBg};
    transform: translateY(-4px) ;
    background-color: ${theme.colors.accent};
  }
`
const Copyright = styled.small`
  color: rgba(255, 255, 255, 0.50);
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
  
    
`
const SocialItem = styled.li`
`