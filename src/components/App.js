import {React, useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([])
  const [pizzaInfo, setPizzaInfo] = useState({
    topping: '',
    size: '',
    vegetarian: true, // Currently just to be used for the form. 
  })
  const [update, setUpdate] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
      .then(r => r.json())
      .then(src => setPizzas(src))
  }, [update])

  function onSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3001/pizzas/${pizzaInfo.id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(pizzaInfo),
    })
      .then(r => r.json())
      .then(() => setUpdate(!update))
  }
  

  return (
    <>
      <Header />
      <PizzaForm pizzaInfo={pizzaInfo} setPizzaInfo={setPizzaInfo} handleSubmit={onSubmit}/>
      <PizzaList pizzas={pizzas} setPizzaInfo={setPizzaInfo} />
    </>
  );
}

export default App;
