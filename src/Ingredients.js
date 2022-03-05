import { useEffect, useState } from "react";

const Ingredients = (props)=>{
    
    const [meal, setMeal] = useState([]);
    const [ingredient, setIngredient] = useState([]);
    const [tags, setTags] = useState([]);
    useEffect(() => {
        setMeal(props.meal);
      }, [props.meal]);
    useEffect(() => {
        getIngredientList();
        getTags();
      }, [meal]);
    console.log("props in ingredients", props.meal)
      function getTags() {
        if (meal.length === 0) return;
        let tag = meal[0]["strTags"]
        if(tag===null){
          // console.log("this is null tag")
          tag=[]
        }else{
          tag=tag.split(",");
        }
        // console.log("tags are: ",tag)
        setTags(tag);
      }
      function filterFunction(key) {
        if (key.startsWith("strIngredient") && meal[0][key]) {
          return true;
        }
      }
    
      function getIngredientList() {
        // console.log("function called: ", meal);
        if (meal.length === 0) {
          return;
        }
        const tag = meal[0]["strTags"];
        // console.log("tag: ", tag);
        let temp = Object.keys(meal[0]).map((key) => {
          if (filterFunction(key)) {
            const ingredientName = meal[0][key];
            const ingredientNumber = onlyNumbers(key);
            const keyMeasure = "strMeasure" + ingredientNumber;
            const ingredientMeasure = meal[0][keyMeasure];
            const obj = { item: ingredientName, measure: ingredientMeasure };
            return obj;
          }
        });
        function onlyNumbers(text) {
            // console.log("this is inside", text.replace(/strIngredient|/, ""), text);
            return text.replace(/strIngredient|/, "");
          }


   
}
return(<h1>Hello
    </h1>)

}


export default Ingredients;