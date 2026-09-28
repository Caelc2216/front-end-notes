import { StrictMode } from "react";
import Monster from "./components/Monster";
import { Monster2 } from "./components/Monster";
import { useState, useEffect } from "react";



function App() {

  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [pokemonHealth, setPokemonHealth] = useState(100)

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

  async function getPokemon() {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    console.log("Getting new pokemon");

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    const data = await response.json();

    const newPokemon: Pokemon = {
      name: data.name,
      height: data.height,
      weight: data.weight,
      baseExperience: data.base_experience,
      image: data.sprites.front_default,
    }

    console.log(data);
    setPokemon(newPokemon)
  }

  type Pokemon = {
    name: string;
    height: number;
    weight: number;
    baseExperience: number;
    image: string;
  }

  useEffect(() => {
    console.log("HEALTH EFFECT RAN")
  }, [health])

  useEffect(() => {
    getPokemon()
  }, [])

  useEffect(() => {
    if (pokemonHealth <= 0) {
      alert(`${pokemon?.name} has died, getting new pokemon`)
      getPokemon();
      setPokemonHealth(100);
    }
  })
  return (

    <>
      <img src={imageURL} alt="Rocket league logo background" />
      <button onClick={() =>
        alert("What a save!")} style={{ borderRadius: 15, backgroundColor: "#e68a00" }}>
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
        <button onClick={increaseCount} style={{ margin: 10 }}>increase</button>
        <button onClick={decreaseCount} style={{ margin: 10 }}>decrease</button>
        <button onClick={resetCount} style={{ margin: 10 }}>reset</button>
        <button onClick={() => setHealth(health + 10)} style={{ margin: 10 }}>increase by 10</button>
      </div>
      <br></br>
      <input onChange={(event) => setName2(event.target.value)} placeholder="Name">

      </input>
      <h1>
        Hello {name2}
      </h1>
        <img src={pokemon?.image}
          alt={pokemon?.name}
          style={{ height: '10rem', width: '10rem', justifyContent: 'center', display: 'flex'}}></img>
        <h4>Pokemon Name: {pokemon?.name}</h4>
      <p>Health: {pokemonHealth}</p>
      <p>Height: {pokemon?.height}</p>
      <p>Weight: {pokemon?.weight}</p>
      <p>Base Experience: {pokemon?.baseExperience}</p>
      <button onClick={() => setPokemonHealth(pokemonHealth - 10)}>Take Damage</button>
    </>
  );
}
// tsc -> jsx -> html(formal)

export default App;
