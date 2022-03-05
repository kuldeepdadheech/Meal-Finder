import React, { useEffect, useState } from "react";
import Ingredients from "./Ingredients";
/* fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=curry")
    .then((resp)=>{return resp.json()})
    .then((resp)=>{console.log(resp)}) 
     /*const[randomMeals, setRandom]=useState({
        mealName:"",
        mealUrl:"",
        mealCategory:"",
        mealArea:"",
        mealRecipe:"",
        mealIngreidients:""
      })
      const fetchData=()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=curry")
        .then((resp)=>{return resp.json()})
        .then((resp)=>{console.log(resp)})
      }
      useEffect(()=>{
      ingredients()
    },[])
        ingredients();
      
    <Ingredients meal = {props}/>*/

const ShuffleList=(props)=>{
    const [ingd, setIngredient] = useState([]);
    const [shuffleDish, setShuffleMeal] = useState([]); 
    const [tags, setTags] = useState([]);
    useEffect(() => {
      setShuffleMeal(props.shuffleMeal);
    }, [props.shuffleMeal]);
    console.log("shuffle dish", shuffleDish);
    useEffect(() => {
      getIngredientList();
      getTags();
    }, [shuffleDish]);
    
    function getTags() {
      if (shuffleDish.length === 0) return;
      let tag = shuffleDish[0]["strTags"]
      if(tag===null){
        // console.log("this is null tag")
        tag=[]
      }else{
        tag=tag.split(",");
      }
      // console.log("tags are: ",tag)
      setTags(tag);
    }
   
    if(!shuffleDish){
      return<h1>Loading</h1>;
    }

      console.log("dish",shuffleDish);
      function match(key){
        //console.log("key:",shuffleDish[0][key])
        if(key.startsWith("strIngredient")&& shuffleDish[0][key] ){
            console.log("true in match")
            return true;
        }
      }
      function getIngredientList(){
        if(shuffleDish===null || shuffleDish.length===0){
          return;
        }
         let temp= Object.keys(shuffleDish[0]).map((elem)=>{
            if(match(elem)){
              const ingredientName = shuffleDish[0][elem];
              console.log("ingredientName:",ingredientName)
              const ingredientNumber = onlyNumbers(elem);
              const keymeasure = "strMeasure"+ingredientNumber;
              const ingredientMeasure = shuffleDish[0][keymeasure];
              const obj = {item:ingredientName,

                           measure:ingredientMeasure}
                           console.log("obj",obj)
              return obj;
            }
            
        })
        const temp2 = temp.filter((item) => {
          return item;
        });
        setIngredient(temp2);
        console.log("temp:",temp)
        function onlyNumbers(text){
          return text.replace(/strIngredient|/, "");
        }
        
        /*Object.keys(shuffleDish).filter((element,index)=>{
        return console.log((shuffleDish.element.keys))
      }*/
    }
  
      console.log("img src",shuffleDish.strMealThumb)
      
    if(shuffleDish===null || shuffleDish.length===0){
      return<h1>Loading...</h1>
    }

    console.log("tags",tags)
    console.log("ingd", ingd)
    return(<div style={{
      margin: "auto",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    }}>
      
    
    <h1>{shuffleDish[0].strMeal}</h1>
    <img src={shuffleDish[0].strMealThumb} style={{
      width: "300px",
      margin: "15px",
      border: "4px #fff solid",
      borderRadius: "2px"
    }

    }/>
    <div style={{
      margin: "20px",
      padding: "10px",
      border: "2px #e09850 dashed",
      borderRadius: "5px"
    }}>
      <h3 >{shuffleDish[0].strCategory}</h3>
      <h3>{shuffleDish[0].strArea}</h3></div>
    
      <p>{shuffleDish[0].strInstructions}</p>
    <div>{}</div>
    
    </div>)
    }


export {ShuffleList}