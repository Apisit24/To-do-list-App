import React, {useState} from "react";
import "./App.css";

function App() {

  const [inputText, setInputText] = useState(""); // Get input text
  const [items, setItems] = useState([]); // add items to array

  function handleChange(event) { // keep data from input
    const newValue = event.target.value;
    setInputText(newValue);
  }
  
  function addItem() { // add data from input to array
    setItems((prevItem) =>{
      return [...prevItem, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => ( // map item to show on screen
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;