import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Gradient from "./Gradient";

function Home({ align, savedGradients, setSavedGradients }) {
  const [data, setData] = useState([]),
    [current, setCurrent] = useState([]),
    history = useHistory();

  const getData = () => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (resp) {
        setData(resp);
        setCurrent(resp.splice(0, 20));
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    return window.addEventListener("scroll", (e) => {
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight >=
        document.documentElement.scrollHeight - 250
      ) {
        let cutElems = data.length;
        if (data.length >= 20) cutElems = 20;
        setCurrent((prevCurrent) => [
          ...prevCurrent,
          ...data.splice(0, cutElems),
        ]);
      }
    });
  }, [data]);

  return (
    <div className="colorCont flex">
      {current.map((gradient) => (
        <Gradient
          gradient={gradient}
          id={gradient.id}
          align={align}
          key={gradient.id}
          savedGradients={savedGradients}
          setSavedGradients={setSavedGradients}
        />
      ))}
    </div>
  );
}

export default Home;
