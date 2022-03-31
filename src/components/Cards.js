import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

const Cards = ({ title, currencies }) => {
  return (
    <Col className="border-0">
      <Card col={3} className="border-0 shadow">
        <Card.Header>
          {" "}
          <h6>Title:</h6>
          {title}
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h6>Currencies</h6>
          </ListGroup.Item>
          <div className="d-flex overflow-scroll">
            {currencies.map((e, i) => {
              return (
                <>
                  <ListGroup.Item>{e}</ListGroup.Item>
                </>
              );
            })}
          </div>
        </ListGroup>
      </Card>
    </Col>
  );
};
export default Cards;
