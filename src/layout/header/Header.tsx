import React from 'react';

import styled from "styled-components";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";


const items =["Home","Skills", "Works", "Testimony", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo></Logo>
            <Menu menuItems={items}></Menu>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: darksalmon;
  display: flex;
  justify-content:space-between;
`

export default Header;