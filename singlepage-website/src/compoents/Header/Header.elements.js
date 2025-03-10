import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 96px 16px 96px;
  height: 160px;
`;
export const CenterContainer = styled.div`
  width: 96px;
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



export const HeaderLogo = styled.img`
    flex: 1;
    object-fit: contain;
`
export const ExtraLogoContainer = styled.div`
  flex: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const ExtraLogo = styled.img`
    width: 64px;
    height: auto;
`

export const ExternalLink = styled.a`
  color:black;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;


