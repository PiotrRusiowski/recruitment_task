import React, { FC, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, fetchItems } from "./store/reducers/items";

const App: FC = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state: any) => state.items);
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchItems());
  }, []);

  console.log(items);

  return (
    <div>
      {/*{items.map((el: any) => (*/}
      {/*  <h1>{el.id}</h1>*/}
      {/*))}*/}
    </div>
  );
};

export default App;
