import React, { FC, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useSelector } from "react-redux";

const App: FC = () => {
  useEffect(() => {
    return () => {
      axios
        .get("https://reqres.in/api/products")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    };
  }, []);
  // @ts-ignore
  const items = useSelector((state) => state.items);
  console.log(items);
  return <div className="App"></div>;
};

export default App;
