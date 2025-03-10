
import styled from "styled-components";
import {Link} from "react-router-dom";
import { FaMagento } from "react-icons/fa";

export const FooterContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 96px 16px 96px;
  height: 160px;
`;
export const CenterContainer = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SideContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`;



export const FooterLogo = styled.img`
    flex: 1;
    object-fit: contain;
`

export const ExternalLink = styled.a`
  color: #fe7b21;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  text-transform: uppercase;
  font-weight: bold;
  white-space: nowrap;
  text-align: center;

  &:hover {
    color: #2f3795;
    text-decoration: underline;
  }
`;