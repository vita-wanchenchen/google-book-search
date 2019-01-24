import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Header() {
  return (
    <div id="header-container">
      <Container style={{ marginLeft: 50}}>
        <Row>
          <Col size="md-12">
            <h1>Google Book Search</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;