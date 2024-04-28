import React, { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const handleSelection = (getId) => {
    setSelected(getId === selected ? null : getId);
  };
  return (
    <div className="accordian">
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div className="item">
            <div className="title" onClick={() => handleSelection(dataItem.id)}>
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {selected === dataItem.id ? <div>{dataItem.answer}</div> : null}
          </div>
        ))
      ) : (
        <div>No Data Founde</div>
      )}
    </div>
  );
};

export default Accordian;
