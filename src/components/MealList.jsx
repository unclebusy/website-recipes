import { useNavigate } from "react-router-dom";

import Meal from "./Meal";

function MealList({ meals }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
      <>
          <button className="btn" onClick={goBack}>Go Back</button>
          <div className='list'>
            {meals.map(meal => (
                <Meal key={meal.idMeal} {...meal} />
            ))}
          </div>
      </>
  );
}

export default MealList;
