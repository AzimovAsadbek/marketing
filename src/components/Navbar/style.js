import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--bgColor);
  .autline-cursor {
    width: 10px;
    height: 10px;
    border: 1px solid black;
    background-color: black;
    position: fixed;
    top: ${({ posy }) => posy + 20 + "px"};
    left: ${({ posx }) => posx + 20 + "px"};
    /* transform: translate(-50%, -50%); */
    border-radius: 50%;
    z-index: 5;
    pointer-events: none;
    transition: top 0.2s ease, left 0.1s ease;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 65px;
  height: 100px;
  font-family: "Montserrat", sans-serif;
`;

const Logo = styled.h1`
  color: var(--activeColor);
  font-size: 30px;
  margin-right: 60px;
  cursor: pointer;
  z-index: 2;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavItem = styled(NavLink)`
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ active }) => (active ? "100%" : "0%")};
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: -20px;
  background-color: var(--primaryColor);
  padding: 10px 15px;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 14px;
  min-width: 190px;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.5s ease;

  ${NavItem}:hover & {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    top: 50px;
  }
`;

const DropdownItem = styled(NavLink)`
  position: relative;
  padding: 8px 0;
  color: white;
  font-size: 16px;
  transition: all 0.3s ease;
  text-decoration: none;
  transform: ${({ active }) => active && "translateX(10px)"};
  &:hover {
    transform: translateX(10px);
  }
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: ${({ active }) => (active ? "70%" : "0%")};
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 70%;
  }
`;

const IconImg = styled.svg`
  width: 24px; /* O'lcham */
  height: 24px;
  fill: white;
  transition: transform 0.3s ease, fill 0.3s ease;
  margin-left: 2vw;
  cursor: pointer;
`;

export {
  NavWrapper,
  Wrapper,
  Logo,
  Section,
  NavItem,
  Dropdown,
  DropdownItem,
  IconImg,
};
