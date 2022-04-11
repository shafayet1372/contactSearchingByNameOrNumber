import React from "react";
import List from "./List";

import ColoredScrollbars from "./ColoredScroll";

export default function Dataview({ contacts }) {
  return (
    <ColoredScrollbars style={{ width: "100%", height: 450 }}>
      <div className="col-md-12 ">
        <ul className="list-group">
          {contacts.map((x) => (
            <List key={x.id} value={x} />
          ))}
        </ul>
      </div>
    </ColoredScrollbars>
  );
}
