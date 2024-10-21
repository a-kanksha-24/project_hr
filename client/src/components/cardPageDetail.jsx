import React from "react";

export const CardPageDetail = (props) => {
  const { title, description } = props.data;
  return (
    <div className="DetailItem">
      <hr />
      <div className="detaildescript">
        <b>{title}</b>
        <p>{description}</p>
      </div>
    </div>
  );
};
