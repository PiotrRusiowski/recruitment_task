import React, { FC, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "./store/reducers/items";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchItems());
  }, []);

  // @ts-ignore
  const items = useSelector((state) => state.items);
  console.log(items);
  return <div className="App"></div>;
};

export default App;
