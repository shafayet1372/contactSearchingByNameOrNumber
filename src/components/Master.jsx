import React, { useState } from "react";
import style from "../style.module.css";
import SearchController from "./SearchController";
import Dataview from "./Dataview";
import modifySearchedValue from "./lib/ModifySearch";
import manulContact from "./lib/manualcontact";
export default function Master() {
  let [search, setSearch] = useState();
  let [contacts, setContacts] = useState([...manulContact.slice()]);

  let searchHandler = (e) => {
    setSearch((p) => e.target.value);
  };

  let filterBySearch = (searchValue, data) => {
    if (searchValue) {
      return modifySearchedValue(searchValue, data);
    }
    return data;
  };

  let showData = () => {
    let searchValue = search ? search.replace(/^\s+|\s+$|\.+$/g, "") : search;
    let getData = filterBySearch(searchValue, contacts.slice());
    if (getData.length) {
      return <Dataview contacts={getData} />;
    }
    return <p className="text-white">no contacts</p>;
  };

  return (
    <div className={`${style.block}`}>
      <div className={`${style.container1} bg-dark  container`}>
        <div className={` row  `}>
          <div className="col-md-12 text-info text-center fw-bold border-start border-5 border-primary">
            <h3>search By name or number</h3>
          </div>
          <SearchController
            value={search}
            searchHandler={searchHandler}
            totalContact={contacts.length}
          />
          {showData()}
        </div>
      </div>
    </div>
  );
}
