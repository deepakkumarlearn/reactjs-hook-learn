import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [countOne, setCountOne] = useState(0);
  const [coutTwo, setCountTwo] = useState(0);
  const handleOne = () => {
    setCountOne(countOne + 1);
  };
  const handleTwo = () => {
    setCountTwo(coutTwo + 1);
  };
  const isEvent = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  },[countOne])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App : useMemo</h1>
        <button type="button" onClick={handleOne}>
          CountOne : {countOne}
        </button>
        <span>{isEvent ? "Even" : "Odd"} </span>
        <button type="button" onClick={handleTwo}>
          CountTwo : {coutTwo}
        </button>
      </header>
    </div>
  );
}

export default App;
