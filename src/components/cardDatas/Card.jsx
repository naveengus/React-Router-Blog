import React from "react";

function Card({ data }) {
  return (
    <>
      <div className="card">
        <img src={data.image}></img>
        <span className="roll">{data.roll}</span>
        <h3>{data.title}</h3>
      </div>
    </>
  );
}

export default Card;
