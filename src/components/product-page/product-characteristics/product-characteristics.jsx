import React, { useState } from "react";
import "./product-characteristics.css";

function Characteristics({ characteristics }) {
  const [expanded, setExpanded] = useState(false);

  const toggleCharacteristics = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="characteristics">
      <div className="characteristics__btn-block">
        <p className="characteristics-title">Характеристики</p>
        <button onClick={toggleCharacteristics}>{expanded ? "-" : "+"}</button>
      </div>
      {expanded && <p className="characteristics-text">{characteristics}</p>}
    </div>
  );
}

export default Characteristics;
