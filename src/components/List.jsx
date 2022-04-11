import React from "react";
import { FcContacts } from "react-icons/fc";
export default function List({ value }) {
  return (
    <li className=" bg-dark text-white list-group-item border-0 outline-0 d-flex justify-content-start ">
      <div>
        <FcContacts style={{ fontSize: "2rem", marginTop: "5px" }} />
      </div>
      <div className="text-start flex-grow-1 mx-2 fw-bold">
        {" "}
        <p className="pt-0 mb-0">{value.name}</p>
        <p>{value.number}</p>
      </div>
    </li>
  );
}
