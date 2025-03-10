import styled from "styled-components";


export const ShopContainer = styled.div`
  @media screen and (min-width: 961px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 960px) {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    width: 100%;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }
`;
