import React from "react";
import style from "../style.module.css";
export default function Input({ type, placeholder, value, searchHandler }) {
  return (
    <input
      type={type}
      className={`${style.formFont} form-control text-white`}
      placeholder={placeholder}
      aria-describedby="basic-addon1"
      value={value}
      onChange={searchHandler}
    />
  );
}
