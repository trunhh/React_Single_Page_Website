import styled from "styled-components";
import { Table } from "react-bootstrap";


export const ProductImage = styled.img`
  width: 128px;
  height: 128px;
  object-fit: contain;
`;

export const CartTable = styled(Table)`

  table-layout: auto;
  border-collapse: separate;
  border-spacing: 64px 0px;
`


export const CartCell = styled.td`
  align-items: center;
  vertical-align: middle;
  width: 1%;
  &:first-child {
    width: auto;
  }
`;

