import React from 'react';
import './card.scss';

function Card({title}) {
  return (
    <div className="skill-card">
      <h6 className="intro-header">{title}</h6>
    </div>
  );
}

export default Card;
