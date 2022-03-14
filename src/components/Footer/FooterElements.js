import styled from "styled-components";
import logo from "../../resources/logo192.png";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #000;
  padding: 1rem 0 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-width: 1300px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled.img.attrs({ src: `${logo}` })`
  margin-right: 10px;
  width: 3rem;
`;

export const WebsiteRights = styled.h3`
  display: flex;
  color: #fff;
  align-items: left;
  justify-self: start;
  font-size: 1rem;
  margin-bottom: -16px;
  
  @media screen and (max-width: 900px) {
    margin-bottom: 0;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 300px;
`;

export const SocialText = styled.h3`
  display: flex;
  color: #fff;
  margin-bottom: 4px; 

  @media screen and (max-width: 900px) {
    margin-bottom: 8px;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #27c3ef;
  }
`;