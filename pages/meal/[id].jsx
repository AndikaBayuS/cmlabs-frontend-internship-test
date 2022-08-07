import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Breadcrumb from "~/components/Breadcrumb/Breadcrumb";
import LoadingScreen from "~/components/LoadingScreen/LoadingScreen";
import { getMealData } from "~/utils/axios.instance";

export default function Meal() {
  const router = useRouter();
  const { id } = router.query;
  const [mealData, setMealData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      await getMealData(id).then((response) => {
        setMealData(response.data.meals);
      });
      setLoading(false);
    }

    getData();
  }, [mealData, id]);

  function convertEmbed(link) {
    return link.replace("watch?v=", "embed/");
  }

  function getIngredients(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strMeasure${i}`]} of ${meal[`strIngredient${i}`]}`
        );
      } else {
        break;
      }
    }
    return ingredients;
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <motion.div
      className="mx-auto max-w-screen-lg p-10 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {mealData?.map((meal) => (
        <div key={meal.idMeal}>
          <Breadcrumb title={meal.strCategory} subtitle={meal.strMeal} />
          <h3 className="mt-5 text-2xl font-semibold">{meal.strMeal}</h3>
          <iframe
            className="mt-10 aspect-video w-full rounded-lg"
            src={convertEmbed(meal.strYoutube)}
          />
          <div className="mt-10">
            <div className="flex h-full flex-col rounded-lg bg-gray-100 p-5 md:flex-row md:space-x-10">
              <picture>
                <img
                  src={meal.strMealThumb}
                  alt="Meal"
                  className="h-96 rounded-lg"
                />
              </picture>

              <div className="mt-3 md:mt-0">
                <h3 className="text-2xl font-semibold">Ingredients</h3>
                <ul className="mt-3 list-disc">
                  {getIngredients(meal).map((ingredient) => (
                    <li className="ml-5" key={ingredient}>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold">Instructions</h3>
              <p className="mt-3 whitespace-pre-line leading-relaxed">
                {meal.strInstructions}
              </p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
