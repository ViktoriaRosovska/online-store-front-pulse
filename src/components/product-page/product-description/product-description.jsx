import React, { useState } from "react";
import "./product-description.css";

function Description({ description }) {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="description">
      <div className="description__btn-block">
        <p className="description-title">Опис</p>
        <button onClick={toggleDescription}>{expanded ? "-" : "+"}</button>
      </div>
      {expanded && <p className="description-text">{description}</p>}
    </div>
  );
}

export default Description;
