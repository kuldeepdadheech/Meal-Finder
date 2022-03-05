import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import {MealList} from './MealList';
import { ShuffleList } from './ShuffleList';

function App() {
  const[meal,setMeal] = useState("");
  const[Shuffle,setShuffle]=useState([]);
  const [dishesArray, setDishesArray] = useState([]);
  let handleChange=(Event)=>{
    let mealValue = Event.target.value;
    setMeal(mealValue);
     
  }
   let handleSearch=(Event)=>{
    /*fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then((res)=>{return res.json()})
    .then((resp)=>{


    Object.keys(resp).forEach((key) =>{
        let urlvalue;
        resp[key].map((obj)=>{urlvalue= obj.strMealThumb})
        setUrl(urlvalue)
    })
      
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    })
    console.log({url});*/
    //const err = MealList({meal})
    //setText(err)
   }
   const handleShufle=()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((response) =>{ 
      console.log("first",response);
     // console.log("second",response.meals)
        setShuffle(response.meals)
      })
   }
   const fetchDishes = (meal) => {
     console.log("in fetchdishes", meal)
    //setDisplay('none') <MealList {...props}/> <ShuffleList props={Shuffle}/>
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
      .then((res) => res.json())
      .then((response) =>{ 
        console.log("first",response);
        console.log("second",response.meals)
         setDishesArray(response.meals)
        })
  };
  let props={
    dishesArray: dishesArray,
    searchedItem:meal
  }
  return (
    <div className="App">
      <h1>Meal Finder</h1>
      <input placeholder="Search for meals or keywords" onChange={handleChange}/>
      <button onClick={(()=>{ fetchDishes(meal)})}>Search</button>
      <button onClick={handleShufle}>Shuffle</button><br/>
      {meal? <MealList {...props}/>:<div></div>}
      {(!meal && Shuffle!==null)?<ShuffleList shuffleMeal={Shuffle}/>:<div></div>}
      
      
      
      
      
    
      
    </div>
  );
}

export default App;
