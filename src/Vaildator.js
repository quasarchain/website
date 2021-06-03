import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Link = tw.span`text-primary-500`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

export default ({ headingText = "Quasar Chain Validator Node Setup" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>

            <h1>How to Setup Quasar Chain Validator Node</h1>
            <h2>Step:1 - Buy VPS</h2>
            <ul>
              <li>
                Buy Server: <Link><a href='https://vultr.com/'>https://vultr.com/</a></Link>
              </li>
              <li>
                Plan: Cloud Compute
              </li>
              <li>
                Location: Los Angeles
              </li>
              <li>
                Type: Ubuntu 20.04 64x bit
              </li>
              <li>
                Size: 160gb
              </li>
              <li>
                Tick Additional Features: DDOS Protection, Block Storage Compatible
              </li>
            </ul>

            <h2>Step:2 - Node Installation</h2>
            <ul>
              <h3>connect: ssh user@ip</h3>
              <li><p>
                <code>
                  apt-get update
                  apt-get upgrade
                </code>
              </p></li>
              <li><p>
                <code>
                  apt install golang
                </code>
              </p></li>
              <li><p>
                <code>
                  sudo apt-get install  git-core  curl  zlib1g-dev  build-essential  libssl-dev  libreadline-dev  libyaml-dev  libsqlite3-dev  sqlite3 libxml2-dev  libxslt1-dev  libcurl4-openssl-dev software-properties-common  libffi-dev  sudo  -y
                </code>
              </p></li>
                <h3>Clone Quasar Go: </h3>
              <li><p>
                <code>
                  git clone https://github.com/quasarchain/go-quasar.git
                </code>
              </p></li>
              <li><p>
                <code>
                  cd go-quasar
                </code>
              </p></li>
              <li><p>
                <code>
                  make all
                </code>
              </p></li>
              <li><p>
                <code>
                  cd build/bin
                </code>
              </p></li>
              <li><p>
                <code>
                  cp geth ~/.
                </code>
              </p></li>
              <li><p>
                <code>
                  cd ~
                </code>
              </p></li>
              <li><p>
                <code>
                  chmod +x geth
                </code>
              </p></li>
              <li><p>
                <code>
                  cp geth /usr/bin/
                </code>
              </p></li>
                <h3>Now test: </h3>
              <li><p>
                <code>
                  ./geth --datadir node
                </code>
              </p></li>
                <h3>Create a file: put your account private key without 0x there, no space, no enter. Type  ctrl+x and y then enter</h3>
              <li><p>
                <code>
                  nano qsr.txt
                </code>
              </p></li>
              <li><p>
                <code>
                ./geth --datadir node account import qsr.txt
                </code>
              </p></li>
                <h3>Create another file: put your given password at prev stage</h3>
              <li><p>
                <code>
                  nano pass.txt
                </code>
              </p></li>
                <h3><Link><a href="https://quasarchain.org/node/geth.service">Download geth.service file</a></Link>. Create another file geth.service. Replace your node ip, your vaildator wallet address then copy and paste. ctrl+x and y then enter</h3>
              <li><p>
                <code>
                nano /etc/systemd/system/geth.service
                </code>
              </p></li>
                <h3><Link><a href="https://quasarchain.org/node/config.toml">Download config.toml file</a></Link>. Create another file config.toml. Copy and paste config.toml file code. ctrl+x and y then enter</h3>
              <li><p>
                <code>
                  nano config.toml
                </code>
              </p></li>
              <li><p>
                <code>
                  systemctl daemon-reload
                </code>
              </p></li>
              <li><p>
                <code>
                  systemctl enable geth
                </code>
              </p></li>
              <li><p>
                <code>
                  systemctl start geth
                </code>
              </p></li>
              <li><p>
                <code>
                  reboot
                </code>
              </p></li>
                <h3>connect: ssh user@ip</h3>
              <li><p>
                <code>
                systemctl restart geth
                </code>
              </p></li>

          </ul>

            <h1>Done!</h1>

          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
