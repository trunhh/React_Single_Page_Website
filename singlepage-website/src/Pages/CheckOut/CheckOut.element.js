import styled from "styled-components";

import { Table } from "react-bootstrap";


export const CheckOutTitle= styled.div`
    display: flex;
    color: #ff6d18;
    border-left: 1px solid #ff6d18;
    margin: 32px 8px 32px 8px;
    padding: 8px;
    align-items: center;
    font-size: x-large;
    font-weight: bold;
    text-transform: capitalize;

`


export const PriceCell = styled.td`
    font-weight: ${({ highlight }) => (highlight ? "bold" : "normal")};
    color: ${({ highlight }) => (highlight ? "#ff6d18" : "black")} !important;
    text-align: right;
    background-color: transparent !important;
    width: 1%;
`

export const CheckOutButton = styled.button`
    transition: transform 0.3s ease-in-out;

    &:hover {
    transform: scale(1.05);
    
  }

`