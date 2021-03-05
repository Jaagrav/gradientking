import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";

function VirtualizedList({ children }) {
  return (
    <div className="colorCont flex">
      {children.map((child) => (
        <LazyLoad offset={100}>{child}</LazyLoad>
      ))}
    </div>
  );
}

export default VirtualizedList;
