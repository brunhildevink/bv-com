import React from 'react';
import './card.scss';

function Card({header, text}) {
  return (
    <div className="card">
      <h4>{header}</h4>
      <p>{text}</p>
    </div>
  );
}

export default Card;
