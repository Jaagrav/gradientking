import React, { useState, useEffect } from "react";
import Gradient from "./Gradient";
import VirtualizedList from "./VirtualizedList";

function Home({ align, savedGradients, setSavedGradients }) {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <VirtualizedList>
      {data.map((gradient) => (
        <Gradient
          gradient={gradient}
          id={gradient.id}
          align={align}
          key={gradient.id}
          savedGradients={savedGradients}
          setSavedGradients={setSavedGradients}
        />
      ))}
    </VirtualizedList>
  );
}

export default Home;
