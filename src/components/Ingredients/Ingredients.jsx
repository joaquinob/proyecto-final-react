import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Ingredients() {

  const [ingredient, setIngredients] = useState([]);

    useEffect(()=> {
      axios('https://66577df95c361705264503e6.mockapi.io/menu/food').then((res) => {
        const mapArray = res.data.results.map((item) => {
            const newObject = {
              id: item.id,
              img: item.food
            }
            return newObject
        });
        setIngredients(mapArray)
      })
    }, [])



  return (
    <div>
      
    </div>
  )
}

export default Ingredients
