import "./App.css";
import React,{ useState ,useReducer} from "react";

function NameList() {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState(()=>'Praneeth');

  function addName() {
    setList([...list, name]);
  }

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(text) => setName(text.target.value)}
      />
      <button onClick={addName}>AddName</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  console.log(count);
  function addOne() {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  );
}

export default App;
