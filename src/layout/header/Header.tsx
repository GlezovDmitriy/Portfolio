import React from 'react';

import styled from "styled-components";
import Logo from "../../components/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HederMenu} from "./hederMenu/HederMenu";


const items =["Home","Skills", "Works", "Testimony", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo></Logo>
                    <HederMenu menuItems={items}></HederMenu>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: rgba(31, 31, 32, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  
  
`

export default Header;