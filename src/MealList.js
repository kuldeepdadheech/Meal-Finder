import React, { useEffect, useState } from "react";
/*  //const[mealData,setMealData]=useState([props])
    console.log(props,"heelo")
    console.log(mealname)
    //const mealName= `${props}`
    //const mealName="pizza"
    
    /*const displayMeal=(mealName)=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then((res)=>{
            console.log(res.json(),"in then1");
            return res.json()})
        .then((resp)=>{
                console.log("in then2")
                console.log(resp)

    
       /* Object.keys(resp).forEach((key) =>{
            let urlValue;
            let nameValue;
            let categoryValue;
            let areaValue;
            let recipeValue;
           // let ingredientsValue;
            resp[key].map((obj)=>{
                nameValue= obj.strMeal;
                urlValue= obj.strMealThumb;
                categoryValue=obj.strCategory;
                areaValue = obj.strArea;
                recipeValue = obj.strInstructions;
               // ingredientsValue =obj.
            
            })
            /*console.log("namevalue in fetch",nameValue)
            setMealData(previousState=>{
                return {...previousState,   mealName:nameValue,
                   mealUrl:urlValue,
                   mealCategory:categoryValue,
                   mealArea:areaValue,
                   mealRecipe:recipeValue}})
           })
             
          /* })
           .catch(error => {
             console.error('There has been a problem with your fetch operation:', error);
           })
           //console.log(mealData)
           //console.log("in display", mealData.mealName)
       }*/
       /*const fetchDishes = (name) => {
           setDisplay('none')
           fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
             .then((res) => res.json())
             .then((response) => setDishesArray(response.meals));
         };
           {props.map(obj=>{
                   return<div>{props.obj}</div>
               })}
           */
       //useEffect(displayMeal,[]);
      // console.log("meallist")
       //console.log(mealName, 'meallist');
       //meal.props.meals[0].strMeal

const MealList=(props)=>{
    console.log("in meallist",{props})
    let itemArray = props.dishesArray.map((obj,index)=>{
        return<div style={{    cursor: "pointer",
            position: "relative",
            height: "180px",
            width: "180px",
            textAlign: "center"}} >
            <img src={props.dishesArray[index].strMealThumb}
        style={{
            width: "100%",
            height:"100%",
            margin:"15px",
            border: "4px #fff solid",
            borderRadius: "2px"
          }}
      />
      
      <div style={{position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    backgroundImage: "initial",
    backgroundPositionX: "initial",
    backgroundPositionY: "initial",
    backgroundSize: "initial",
    backgroundRepeatX: "initial",
    backgroundRepeatY: "initial",
    backgroundAttachment: "initial",
    backgroundOrigin: "initial",
    backgroundClip: "initial",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.2s ease-in",
    transitionProperty: "opacity",
    transitionDuration: "0.2s",
    transitionTimingFunction: "ease-in",
    transitionDelay: "0s",
    opacity: "0"}}>
       <h3 style={{
               display: "block",
               fontSize: "1.17em",
               marginBlockStart: "1em",
               marginBlockEnd: "1em",
               marginInlineStart: "0px",
               marginInlineEnd: "0px",
               fontWeight: "bold",
       }}>{props.dishesArray[index].strMeal} </h3>
    </div>
      </div>
    })
    return(<>

        <h1>Search Results for  '{props.searchedItem}': </h1>
          <div style={{display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            margin:"15px",
            gridGap: "20px",
            marginTop: "20px"}}> {itemArray}</div>
          
    </>
       
       
    )


}

export  {MealList};