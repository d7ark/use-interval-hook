import React, {useState} from "react";
import "./App.css";
import useInterval from "./useInterval";

export default function App() {
  const [text, setText] = useState('lol');
  const [time, setTime] = useState(500);

  useInterval(() => console.log(text), time);

  const changeTest = () => {
    setText(`${text} ${text}`);
  };

  const setNullTime = () => {
    setTime(null);
  };

  const changeTime = () => {
    setTime(time / 2);
  };

  return (
    <div className="App">
      <header className="App-header">

        <p>open console</p>

        <button onClick={changeTest}>change text</button>
        <button onClick={changeTime}>change time</button>
        <button onClick={setNullTime}>set null time</button>

      </header>
    </div>
  );
}
