import Select from "react-select";
import "./App.css";
import { useEffect } from "react";

function App() {
  const getBerries = async () => {
    const berries = await fetch("https://pokeapi.co/api/v2/berry/");
    const value = await berries.json();

    console.log(value);
  };

  useEffect(() => {
    getBerries();
  }, []);

  return <div className="App">{/* <Select options={options}></Select> */}</div>;
}

export default App;
