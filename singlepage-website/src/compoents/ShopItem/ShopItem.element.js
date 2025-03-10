import { FaCartPlus } from "react-icons/fa";
import styled from "styled-components";

export const ShopItemButton = styled.div`
  background-color: #feeadd;
  background-image: none;
  display: flex;
  justify-content: center;
  text-align: left;
  border: none;
  padding: 16px;
  box-sizing: border-box;
  overflow: hidden;
  transition: background-image 0.3s ease, transform 0.3s ease;

  &:hover {
    background-image: linear-gradient(#ff9865, #ff5e61);
    & > div {
      transform: scale(1.05);
    }
  }


  /* On mobile: make each item take the full viewport width */
  @media screen and (max-width: 960px) {
    flex: 0 0 100%;
    scroll-snap-align: start;
  }
`;

export const ShopItemContainer = styled.div`
    width: 512px;
    
    background-color: white;
    display: flex;
    margin: 32px 64px 48px 16px;
    padding: 32px;
    transition: transform 0.3s ease-in-out;
`

export const ShopItemContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
`
export const ShopItemContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: -128px;
    align-items: center;
`

export const ShopItemImage = styled.img`
    width: 288px;
    height: 100%;
    object-fit: cover;
    box-shadow: -16px 0 16px -16px rgba(0, 0, 0, 0.3);
`
export const ShopItemPrice = styled.div`
    background-image: linear-gradient(#fe6608, #f01d6e);
    width: 160px;
    height: 52px;
    font-weight: bold;
    font-size: small;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    box-shadow: 0px 16px 16px -8px rgba(0, 0, 0, 0.3);
    margin-bottom: 8px;
    margin-top: -16px;
    color: white;

    ::first-line {
        font-size: large;
        font-weight: bold;
    }
`;

export const RedSquareBox = styled.div`
  width: 32px;
  height: 32px;
  border-style: solid;
  border-width: 4px;
  border-color: #febdba;
  margin-left: 16px;
`

export const ShopItemName = styled.div`
  color: black;
  background-color: white;
  margin-left: 32px;
  margin-top: -16px;
  font-size: 32px;
  font-weight: bold;
`

export const ShopDescription = styled.div`
  color: black;
  font-size: small;
  margin-right: 24px;
  white-space: pre-line;
`

export const AddToCartButton = styled.button`
  width: 160px;
  height: 48px;
  border-radius: 24px;
  background-image: linear-gradient(#fe6608, #f01d6e);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  box-shadow: 0px 16px 16px -8px rgba(0, 0, 0, 0.3);
  margin-bottom: 8px;
  transition: transform 0.3s ease-in-out;
  font-weight: bold;
  font-size: small;
  color: white;
  text-transform: uppercase;
  padding: 8px 24px 8px 24px;


  &:hover {
    transform: scale(1.05);
    
  }
 
`

export const AddToCartIcon = styled(FaCartPlus)`
  color: white;
  font-size: 32px;
`;