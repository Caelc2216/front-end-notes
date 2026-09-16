import { StrictMode } from "react";
import Monster from "./components/Monster";
import { Monster2 } from "./components/Monster";



function App() {
  const name: string = "Professor"
  const age: number = 111;
  const teacher: boolean = true
  const imageURL: string = "https://wallpapercave.com/wp/wp8131154.jpg"

  function makeUpperCase(text: string): string {
    return text.toUpperCase();
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
    </>
  );
}
// tsc -> jsx -> html(formal)

export default App;
