import React from "react";
import Card from "./cardDatas/Card";

function DataScience({ cards }) {
  const filterCard = cards.filter((card) => card.roll === "Data-Science");
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

export default DataScience;
