import React from "react";
import Card from "./cardDatas/Card";

function CyberSecurity({ cards }) {
  const filterCard = cards.filter((card) => card.roll === "Cyber-Security");
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

export default CyberSecurity;
