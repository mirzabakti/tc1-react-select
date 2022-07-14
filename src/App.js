import Select from "react-select";
import "./App.css";

function App() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="App">
      <Select options={options}></Select>
    </div>
  );
}

export default App;
