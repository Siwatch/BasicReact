import React from "react";

const Widecard = (props) => {
  return (
    <div className="widecard">
      <div className="wide-con">
        <h3>{props.title}</h3>
        <h4 className="secondtext">{props.where}</h4>
        <h4 className="secondetext">
          {props.from} - {props.to}
        </h4>
        <h4 className="secondetext">
          GPA: {props.gpa}
          {props.gpax}
        </h4>
      </div>
      <div className="image">
          <img src={props.imgs}/>
      </div>
    </div>
  );
};

export default Widecard;
