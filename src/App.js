import React from "react";
import styled from "styled-components";
import { CopyBlock, dracula } from "react-code-blocks";
import { Staking, Dapp } from "figment-elements";
import { Tabs } from "antd";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `
## Staking widget or full Dapp
  You can either import:
  - the **staking widget** (the UI component that handles the ETH stakign process), or
  - the **full dapp**, which in addition to the staking widget includes:
    - the staking activity (log of every staking and unstaking action
    - a rewards tab with total stake, all time rewards and a chart of rewards over time

## Options for importing
`;

function CodeBlock({ code }) {
  return (
    <CopyBlock
      customStyle={{ marginTop: "20px", padding: "20px 0", fontSize: "12px" }}
      text={code}
      language={"ts"}
      theme={dracula}
      showLineNumbers
    />
  );
}

function App() {
  React.useEffect(() => {
    window.process = {
      env: {
        PLACEHOLDER: "placeholder",
      },
    };

    window.FIGMENT_ELEMENTS_CONFIG = {
      elements: [
        {
          containerSelector: "#figment-elements-staking-container",
          element: "STAKING",
        },
        {
          containerSelector: "#figment-elements-dapp-container",
          element: "DAPP",
        },
      ],
    };

    const script = document.createElement("script");
    script.src = "https://dapp.figment.io/elements";
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header>
        <h3>Figment Elements Demo</h3>
      </Header>
      <Container>
        <Left>
          <LeftWrapper>
            <StakingContainer>
              <Staking />
            </StakingContainer>
          </LeftWrapper>
        </Left>
        <Right>
          <DappContainer>
            <Dapp />
          </DappContainer>
        </Right>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Left = styled.div`
  width: 43%;
  border-right: solid #ccc 1px;
  padding-top: 20px;
`;

const LeftWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Right = styled.div`
  width: 57%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

const StakingContainer = styled.div`
  width: 380px;
  height: 409px;
`;

const DappContainer = styled.div`
  width: 800px;
  height: 800px;
`;

const Header = styled.div`
  font-size: 32px;
  display: flex;
  height: 80px;
  text-align: center;
  border-bottom: solid 1px #ccc;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

const SectionHeader = styled.h2`
  font-size: 24px;
`;
