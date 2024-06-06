import { useEffect, useState } from "react";
import Form from "./Form/Form";
import Home from "./Home/Home";
import axios from "axios";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState([])
  const [ingredient, setIngredients] = useState([]);

    useEffect(()=> {
      axios('https://66577df95c361705264503e6.mockapi.io/menu/food').then((res) => {
        const mapArray = res.response.map((item) => {
            const newObject = {
              id: item.id,
              img: item.food
            }
            return newObject
        });
        setIngredients(mapArray)
      })
    })

      


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route 
            exact path="/" 
            element={
              !user.length > 0
              ? <Form  setUser = {setUser}/>
              : <Home user={user} setUser={setUser} ingredient = {ingredient}/>
            }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
