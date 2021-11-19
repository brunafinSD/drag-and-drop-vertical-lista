import React from "react";
import "./styles.scss";

interface ICard {
  data: {
    id: number;
    content?: string;
    user?: string;
  };
}

export function Card({ data }: ICard) {
  return (
    <div className="containerCard">
      <header>
        <label>{data.id}</label>
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" title="" />}
    </div>
  );
}
