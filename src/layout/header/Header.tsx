import React from 'react';
import styled from "styled-components";
import Logo from "../../components/Logo";
import Nav from "../../components/Nav";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo></Logo>
            <Nav></Nav>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: darksalmon;
`

export default Header;