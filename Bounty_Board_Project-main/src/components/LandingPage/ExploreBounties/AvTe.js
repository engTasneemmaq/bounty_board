import React from "react";

const AvTe = ({svg,text}) => {
  return (
    <div className="flex items-center gap-1">
      {svg}

      <h3>{text}</h3>
    </div>
  );
};

export default AvTe;
