import { StrictMode } from "react";
import Monster from "./components/Monster";
import { Monster2 } from "./components/Monster";
import { useState } from "react";



function App() {
  const name: string = "Professor"
  const age: number = 111;
  const teacher: boolean = true
  const imageURL: string = "https://wallpapercave.com/wp/wp8131154.jpg"
  // count - function to change it
  // setCount - function to change it
  const [health, setHealth] = useState(10)
  const [isAlive, setIsAlive] = useState(true)
  const [name2, setName2] = useState("")

  function makeUpperCase(text: string): string {
    return text.toUpperCase();
  }

  function increaseCount() {
    setHealth(health + 1)
  }

  function decreaseCount() {
    setHealth(health - 1)
  }

  function resetCount() {
    setHealth(0);
  }


  return (

    <>
      <img src={imageURL} />
      <button onClick={() =>
        alert("What a save!")}>
        You know what to do
      </button>


      <h1>Hello {makeUpperCase(name)} {3 + 4} </h1>
      <p>Age: {age}</p>
      <p>Teacher: {teacher ? "yes" : "no"}</p>
      <br></br>
      <Monster
        name="Goblin"
        health={30}
        damage={14}
        boss={false}
      />
      <br></br>
      <Monster2
        name="Dragon"
        health={300}
        damage={1400}
        boss={true}
      />
      <h1>
        {health > 0 ? (

          <p>You are alive</p>) : <p>Ya dead bro</p>}
      </h1>
      <br></br>
      <h1>Health: {health}</h1>
      <div>
        <button onClick={increaseCount}>increase</button>
        <button onClick={decreaseCount}>decrease</button>
        <button onClick={resetCount}>reset</button>
        <button onClick={()=>setHealth(health + 10)}>increase by 10</button>
      </div>
      <br></br>
      <input onChange={(event) => setName2(event.target.value)} placeholder="Name">
      
      </input>
      <h1>
        Hello {name2}
      </h1>
    </>
  );
}
// tsc -> jsx -> html(formal)

export default App;
