import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineCode, AiFillCode } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
          <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: +91-9013504220">+91-9013504220</LinkItem>
          </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:shubhankardey29sep@gmail.com">
            shubhankardey29sep@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning new stuffs time to time!!!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/UserShub">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/shubhankar-dey-a954b0221/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://auth.geeksforgeeks.org/user/shubhankardey29sep/practice/">
            <AiFillCode size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://leetcode.com/shubhankardey29sep/">
            <AiOutlineCode size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;