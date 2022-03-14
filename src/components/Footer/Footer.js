import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  SocialText,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
   
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            <WebsiteRights>
              Edited in-house. NIT Warangal. All rights reserved.
            </WebsiteRights>
          </SocialLogo>
          <SocialIcons>
            <SocialText>Follow us</SocialText>
            <SocialIconLink href="https://www.facebook.com/nitwcura/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="https://instagram.com/cura_nitw?utm_medium=copy_link" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/company/cura-nitw" target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href="https://twitter.com/cura_nitw?t=CTU_yimzx-DfjrLk0nGa0g&s=09" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
    
  );
};

export default Footer;
