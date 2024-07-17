import React from "react";
import styled from "styled-components";
import { CopyBlock, dracula } from "react-code-blocks";
import { Staking, Dapp } from "figment-elements";

function CodeBlock({ code }) {
  return (
    <CopyBlock
      customStyle={{ marginTop: "20px", padding: "20px 0" }}
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
      <Header>Figment Elements Demo</Header>
      <Container>
        <Left>
          <LeftWrapper>
            <SectionHeader>NPM Initialization</SectionHeader>
            <CodeBlock code={npmImportCode} />
            <CodeBlock code={npmRenderCode} />
            <SectionHeader>Script Initialization</SectionHeader>
            <CodeBlock code={scriptConfigCode} />
            <CodeBlock code={scriptRenderCode} />
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
  width: 50%;
  padding-top: 40px;
  background-color: #eee;
  padding: 40px 0;
`;

const LeftWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Right = styled.div`
  width: 50%;
  background-color: #ddd;
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

const Header = styled.h1`
  font-size: 32px;
  text-align: center;
`;

const SectionHeader = styled.h2`
  font-size: 24px;
`;
