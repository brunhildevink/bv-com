import React from 'react';
import './card.scss';

function Card({title, text, highlight}) {
  return (
    <div className={`skill-card ${highlight ? "highlight" : ""}`}>
      <h4 className="intro-header">{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default Card;
