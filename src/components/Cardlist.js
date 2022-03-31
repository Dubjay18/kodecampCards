import React from "react";
import { Row } from "react-bootstrap";
import Cards from "./Cards";
import allGiftCards from "./data";
function Cardlist() {
  console.log(allGiftCards);
  return (
    <Row xs={1} md={2} lg={3} className="g-4 mt-5 mx-2">
      {allGiftCards.map((e, i) => {
        return <Cards title={e.title} currencies={e.currencies} />;
      })}
    </Row>
  );
}
export default Cardlist;
