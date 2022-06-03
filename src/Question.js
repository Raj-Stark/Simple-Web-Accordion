import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ questionData }) => {
  const { title, info } = questionData;
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? (
            <AiOutlineMinus></AiOutlineMinus>
          ) : (
            <AiOutlinePlus></AiOutlinePlus>
          )}
        </button>
      </header>
      {showInfo ? <p>{info}</p> : " "}
    </article>
  );
};

export default Question;
