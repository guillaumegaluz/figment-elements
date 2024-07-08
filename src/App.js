import styled from "styled-components";
import { CopyBlock, dracula } from "react-code-blocks";
import example from "./example.png";

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
  return (
    <Container>
      <Left>
        <LeftWrapper>
          <CodeBlock code={importCode} />
          <CodeBlock code={renderCode} />
        </LeftWrapper>
      </Left>
      <Right>
        {/* replace me with the StakeWidget import */}
        <img alt="example" src={example} width={350} />
      </Right>
    </Container>
  );
}

const importCode = `import { StakeWidget } from "@figmentio/ui`;
const renderCode = `<StakeWidget}
  orgUuid="foobar" 
  wallet={{
    protocol: "ethereum",
    address: "0x123"
  }}
  signer={() => foobar()}
/>`;

export default App;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Left = styled.div`
  width: 50%;
  padding-top: 100px;
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
  justify-content: center;
  align-items: center;
`;
