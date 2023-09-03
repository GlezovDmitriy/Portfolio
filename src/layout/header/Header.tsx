import React from 'react';

import styled from "styled-components";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";


const items =["Home","Skills", "Works", "Testimony", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo></Logo>
                    <Menu menuItems={items}></Menu>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: darksalmon;
  
`

export default Header;