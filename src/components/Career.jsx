import React from "react";
import Card from "./cardDatas/Card";

function Career({ cards }) {
  const filterCard = cards.filter((card) => card.roll === "Career");
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

export default Career;
