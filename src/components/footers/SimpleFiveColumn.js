import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/logo.svg";
import { ReactComponent as TelegramIcon } from "../../images/telegram-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import { ReactComponent as MediumIcon } from "../../images/medium-icon.svg";

const Container = tw.div`bg-gray-900 text-gray-100 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;
const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-400`;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Quasar Chain</LogoText>
          </LogoContainer>
          <CompanyDescription>
          QUASAR Chain is A Powerful DeFi Friendly Blockchain for Next Generation.
          </CompanyDescription>
          <SocialLinksContainer>
            <SocialLink href="#" target="_blank">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="#" target="_blank">
              <TelegramIcon />
            </SocialLink>
            <SocialLink href="#" target="_blank">
              <GithubIcon />
            </SocialLink>
            <SocialLink href="#" target="_blank">
              <MediumIcon />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Quick Links</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#" target="_blank">Blog</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#" target="_blank">Support</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#" target="_blank">About Us</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Product</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="https://qsrscan.com/">Explorer</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#" target="_blank">Wallet</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
        {/*  <ColumnHeading>Legal</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#" target="_blank">Privacy Policy</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#" target="_blank">Terms of Service</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#" target="_blank">Disclaimer</Link>
            </LinkListItem>
          </LinkList> */}
        </Column>
                  <CopywrightNotice>&copy; 2021 Quasar Chain All Rights Reserved.</CopywrightNotice>
      </FiveColumns>
    </Container>
  );
};
