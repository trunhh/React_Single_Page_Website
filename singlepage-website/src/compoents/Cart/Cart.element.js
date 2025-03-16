import styled from "styled-components";
import { Table } from "react-bootstrap";


export const ProductImage = styled.img`
  width: 128px;
  height: 128px;
  object-fit: contain;
`;


export const CartCell = styled.td`
  vertical-align: middle;
  width: 0%;
  &:first-child {
    width: auto;
  }
`;

