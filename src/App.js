import React, { Fragment } from "react";
import {
  Button,
  Sidebar,
  Content,
  SideNav,
  Logo,
  Title,
  Card,
  Container
} from "./styles/style";
import logo from "./images/logo.png";

function App() {
  return (
    <Fragment>
      <Sidebar>
        <Logo src={logo} />
        <SideNav></SideNav>
      </Sidebar>
      <Content>
        <Title>Buttons</Title>
        <Button primary>Primary</Button>
        <Button>Default</Button>
        <Button className="button-success">Success</Button>
        <Button className="button-warning">Warning</Button>
        <Button className="button-secondary">Secondary</Button>
        <Button className="button-error">Error</Button>
        <Title>Accordions</Title>
        <Title>Cards</Title>
        <Container>
        <Card>
          <h1>Jane Doe</h1>
        </Card>
        <Card>
        <h1>Alan Delon</h1>
        </Card>
        </Container>
      </Content>
    </Fragment>
  );
}

export default App;
