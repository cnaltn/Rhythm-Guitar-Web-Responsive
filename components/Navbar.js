import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Navlogo from "../images/butterfly.svg";
import mainGuitar from "../images/guitar.png";

const NavSection = styled.div`
  display: flex;
  width: max-content;
  justify-content: space-between;
  align-items: flex-start;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  padding-top: 62px;

  gap: 131px;
`;

const Right = styled.div``;
const Img = styled(Image)``;
const Img2 = styled(Image)``;

const Container = styled.div``;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  & h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    color: white;
  }
`;

const NavList = styled.div`
  display: flex;
  gap: 56px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: white;
`;

const Navbar = () => {
  return (
    <Container className="container mx-auto">
      <NavSection>
        <Left>
          <NavLogo>
            <Img layout="fixed" src={Navlogo}></Img>
            <h1>Rhythm</h1>
          </NavLogo>
          <NavList className="">
            <a className="hidden md:flex" href="#">
              StNavlogoore
            </a>
            <a className="hidden md:flex" href="#">
              Collections
            </a>
            <a className="hidden md:flex" href="#">
              Support
            </a>
          </NavList>
        </Left>
        <Right></Right>
      </NavSection>
    </Container>
  );
};

export default Navbar;
export { Left, NavLogo, Navlogo, Img };
