import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

export default function ColoredScrollbars(props) {
  // constructor(props, ...rest) {
  //     super(props, ...rest);
  //     this.state = { top: 0 };
  //     this.handleUpdate = this.handleUpdate.bind(this);
  //     this.renderView = this.renderView.bind(this);
  //     this.renderThumb = this.renderThumb.bind(this);
  // }

  let renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: "#27ae60",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      {...props}
    />
  );
}
