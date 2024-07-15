import React from "react";
import styled from "styled-components";
import { CopyBlock, dracula } from "react-code-blocks";

function CodeBlock({ code }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <CopyBlock
        text={code}
        language={"ts"}
        theme={dracula}
        showLineNumbers={3}
      />
    </div>
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
    script.src = "http://localhost:3098/elements";
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container>
      <Left>
        <LeftWrapper>
          <CodeBlock code={configCode} />
          <CodeBlock code={renderCode} />
        </LeftWrapper>
      </Left>
      <Right>
        <StakingContainer id="figment-elements-staking-container" />
        <DappContainer id="figment-elements-dapp-container" />
      </Right>
    </Container>
  );
}

const configCode = `React.useEffect(() => {
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
const renderCode = `<div
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
  padding: 40px;
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
