import React from "react";
import "./index.css";

const Message = () => {
  return (
    <div className="messageWrapper">
      <div className="titleCompany">
        Op<span className="changeCol font4">GURU</span>.in
      </div>
      <div className="messageCompany">
        Register and apply to{" "}
        <span className="changeCol font5-6">10000+ opportunities</span>
      </div>
    </div>
  );
};

export default Message;
