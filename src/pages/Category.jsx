// pages/Category.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";

import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

function Category() {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    getFilteredCategory(name).then(data => setMeals(data.meals));
  }, [name]);

  return (
      <>
        {!meals.length ? <Preloader /> : <MealList meals={meals}/>}
      </>
  )
}

export default Category;
