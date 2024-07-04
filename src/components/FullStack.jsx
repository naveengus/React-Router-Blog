import React from "react";
import Card from "./cardDatas/Card";
function FullStack({ cards }) {
  const filterCard = cards.filter((card) => card.roll === "FSD");
  return (
    <>
      <div className="card-container">
        {filterCard.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </>
  );
}

export default FullStack;
