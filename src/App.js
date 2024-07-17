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

  const items = [
    {
      key: "1",
      label: "React",
      children: (
        <>
          <CodeBlock code={npmImportCode} />
          <CodeBlock code={npmRenderCode} />
        </>
      ),
    },
    {
      key: "2",
      label: "Javascript",
      children: (
        <>
          <CodeBlock code={scriptConfigCode} />
          <CodeBlock code={scriptRenderCode} />
        </>
      ),
    },
  ];

  return (
    <>
      <Header>
        <h3>Figment Elements Demo</h3>
      </Header>
      <Container>
        <Left>
          <LeftWrapper>
            <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            <Tabs defaultActiveKey="1" items={items} />;
          </LeftWrapper>
        </Left>
        <Right>
          <SectionHeader>Output</SectionHeader>
          <StakingContainer>
            <Staking />
          </StakingContainer>
          <DappContainer>
            <Dapp />
          </DappContainer>
        </Right>
      </Container>
    </>
  );
}

const npmImportCode = `import { Staking, Dapp } from "figment-elements";`;
const npmRenderCode = `<div /* Add any custom styling necessary here */>
  <Staking />
</div>

...

<div /* Add any custom styling necessary here */>
  <Dapp />
</div>`;
const scriptConfigCode = `React.useEffect(() => {
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
}, []);`;
const scriptRenderCode = `<div
  id="figment-elements-staking-container"
  /* Add any custom styling necessary here */
/>

...

<div
  id="figment-elements-dapp-container"
  /* Add any custom styling necessary here */
/>`;

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
  margin-top: 40px;
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
