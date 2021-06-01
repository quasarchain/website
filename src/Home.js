import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/TwoPlans.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import Partners from "components/cards/Cards.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import qusarLogo from "images/quasar-logo.svg";
import performImageSrc from "images/perform.svg";
import macHeroScreenshotImageSrc from "images/perform.svg";
import codeImageSrc from "images/code.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Better, Faster, Low Fee <HighlightedText>QUASAR Chain</HighlightedText></>}
        description="QUASAR Chain is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks."
        imageSrc={qusarLogo}
        imageBorder={true}
        imageDecoratorBlob={true}
        primaryButtonText="Get Started"
      />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            <HighlightedText>QUASAR Chain</HighlightedText>
          </>
        }
      />
      <MainFeature3 />
      <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={performImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <Pricing
        heading={<>How to setup <HighlightedText>Metamask</HighlightedText></>}
      />
    {/* <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            How to setup <HighlightedText>Metamask</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      /> */}
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
           Built by developers, for developers
          </>
        }
        imageSrc={codeImageSrc}
        showDecoratorBlob={false}
      //  features={[
      //    {
      //      Icon: MoneyIcon,
      //      title: "Affordable",
      //      description: "We promise to offer you the best rate we can - at par with the industry standard.",
      //      iconContainerCss: tw`bg-green-300 text-green-800`
      //    },
      //    {
      //      Icon: BriefcaseIcon,
      //      title: "Professionalism",
      //      description: "We assure you that our templates are designed and created by professional designers.",
      //      iconContainerCss: tw`bg-red-300 text-red-800`
      //    }
      //  ]}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            QUASAR Chain <HighlightedText>dApp.</HighlightedText>
          </>
        }
      />
    {/*  <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
          }
        ]}
      /> */}
      <Partners />
    {/*  <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Are all the templates easily customizable ?",
            answer:
              "Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "How long do you usually support an standalone template for ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "What kind of payment methods do you accept ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Is there a subscribption service to get the latest templates ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Are the templates compatible with the React ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Do you really support Internet Explorer 11 ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        ]}
      /> */}
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
