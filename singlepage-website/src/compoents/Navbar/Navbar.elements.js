import styled from "styled-components"
import { Conatainer } from "../../GlobalStyles";
import {FaMagento, FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background: #101522;
  background-image: linear-gradient(#ff606f, #ffbf71);
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;

`

export const MobileIcon = styled.div`
    display: none;



    @media screen and (max-width:960px) {
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%) !important;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: ${({ click }) => (click ? "0" : "-100%")}; /* Toggle visibility */
      opacity: ${({ click }) => (click ? "1" : "0")};  /* Ensure smooth transition */
      transition: all 0.5s ease-in-out;
      background: #101522;
  }
`;




export const NavItem = styled.li`
  border-bottom: 2px solid transparent;

  &:hover {
    background: white;
  }

  @media screen and (max-width:960px){
      width:100%;

      &:hover {
          border:none;
      }
  }
`;

export const NavLinks = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 12px;
  font-weight: bold;
  height: 100%;
  text-transform: uppercase;

  &:hover {
    color: #fe7b21;
  }


  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color:#4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;


export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background-color: black;
  }

  /* &:active {
    background-color: #e0e0e0;
  } */
`;

export const CartIcon = styled(FaShoppingCart)`
  color: white;
  font-size: 32px;
`;