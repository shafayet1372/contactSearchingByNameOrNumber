import React from "react";
import List from "./List";

import ColoredScrollbars from "./ColoredScroll";

export default function Dataview({ contacts }) {
  return (
    <div className="col-md-12 " style={{ width: "100%" }}>
      <ColoredScrollbars style={{ width: "100%", height: 400 }}>
        <ul className="list-group">
          {contacts.map((x) => (
            <List key={x.id} value={x} />
          ))}
        </ul>
      </ColoredScrollbars>
    </div>
  );
}
