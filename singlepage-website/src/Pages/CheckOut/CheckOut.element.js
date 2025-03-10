import styled from "styled-components";

import { Table, Form } from "react-bootstrap";

export const CheckOutHeader = styled.div`
    display: flex;
    height: 128px;
    background-color: #ffe7d4;
    padding: 8px 48px 8px 48px;
    

`

export const CheckOutTitle= styled.div`
    display: flex;
    color: #ff6d18;
    border-left: 1px solid #ff6d18;
    display: flex;
    margin: 32px 8px 32px 8px;
    padding: 8px;
    align-items: center;
    font-size: x-large;
    font-weight: bold;
    text-transform: capitalize;

`

export const Section = styled.div`
    display: flex;
    padding: 16px 128px 0px 128px;
    justify-content: center;
    


`

export const SectionTitle = styled.div`
    display: flex;
    color: black;
    font-size: large;
    text-transform: uppercase;
    font-weight: bold;
    border-bottom: 2px solid gray;
    padding: 16px 128px 16px 128px;
  align-items: center;
  gap: 8px

`

export const CheckOutSummary = styled.div`
    display: flex;
    background-color: #ffe7d4;
    padding: 16px 192px 16px 192px;
    

`

export const SummaryTable = styled(Table)`
    width: 30%;
    margin-left: auto;
    table-layout: auto;
    background-color: transparent !important;

`

export const SummaryCell = styled.td`
    background-color: transparent !important;
`

export const PriceCell = styled.td`
    font-weight: ${({ highlight }) => (highlight ? "bold" : "normal")};
    color: ${({ highlight }) => (highlight ? "#ff6d18" : "black")} !important;
    text-align: right;
    background-color: transparent !important;
    width: 1%;
`

export const CheckOutButton = styled.button`
    margin: 16px 192px 48px auto;
    display: flex;
    background-color: #ff6d18;
    width: 160px;
    height: 48px;
    color: white;
    font-size: large;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 16px;
    transition: transform 0.3s ease-in-out;

    &:hover {
    transform: scale(1.05);
    
  }

`