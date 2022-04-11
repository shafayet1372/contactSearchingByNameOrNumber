import React from "react";
import { BsSearch } from "react-icons/bs";
import Input from "./Input";
export default function SearchController({
  value,
  searchHandler,
  totalContact,
}) {
  return (
    <div className="col-md-12 my-2">
      <form>
        <div className="col-auto">
          <div className="input-group mb-3">
            <span
              className="input-group-text bg-dark text-success"
              id="basic-addon1"
            >
              <BsSearch />
            </span>
            <Input
              type="text"
              placeholder={`search among ${totalContact} contact(s)`}
              searchHandler={searchHandler}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
