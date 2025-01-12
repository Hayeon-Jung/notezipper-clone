import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#ddd2ce",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3" style={{ color: "black" }}>
            Copyright &copy; 이겨내요 코로나
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
