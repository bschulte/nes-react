import React, { Component } from "react";

import { Container, Button } from "nes-react";

import Row from "./Row";
import Col from "./Col";

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 15,
          width: 1024
        }}
      >
        <h1>nes-react</h1>
        <h4>
          A React component library based on the awesome{" "}
          <a href="https://github.com/BcRikko/NES.css">nes.css</a>
        </h4>
        <Container>
          {/* Containers */}
          <p>Containers</p>
          <Row>
            <Col>
              <Container>Regular</Container>
            </Col>
            <Col>
              <Container rounded>Rounded</Container>
            </Col>
            <Col>
              <Container dark>Dark</Container>
            </Col>
          </Row>
        </Container>
        {/* Buttons */}
        <Container>
          <p>Buttons</p>
          <Button>Regular</Button>
          <Button primary>Primary</Button>
          <Button success>Success</Button>
          <Button warning>Warning</Button>
          <Button error>Error</Button>
        </Container>
      </div>
    );
  }
}
