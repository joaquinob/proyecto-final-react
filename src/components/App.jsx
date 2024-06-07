import { useEffect, useState } from "react";
import Form from "./Form/Form";
import Home from "./Home/Home";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState([]);
  const [ingredient, setIngredients] = useState([]);

  useEffect(() => {
    axios('https://6662cfeb62966e20ef0a1c9c.mockapi.io/platos')
      .then((res) => {
        const mapArray = res.data.map((item) => {
          const newObject = {
            id: item.id,
            img: item.img,
            plate: item.name
          };
          return newObject;
        });
        setIngredients(mapArray);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/"
            element={
              !user.length > 0
                ? <Form setUser={setUser} />
                : <Home user={user} setUser={setUser} ingredient={ingredient} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
