import { useState } from "react";
import Form from "./Form/Form";
import Home from "./Home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState([])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route 
            exact path="/" 
            element={
              !user.length > 0
              ? <Form  setUser = {setUser}/>
              : <Home user={user} setUser={setUser}/>
            }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
