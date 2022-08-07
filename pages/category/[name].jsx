import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Breadcrumb from "~/components/Breadcrumb/Breadcrumb";
import LoadingScreen from "~/components/LoadingScreen/LoadingScreen";
import MealCard from "~/components/MealCard/MealCard";
import { getMeals } from "~/utils/axios.instance";

export default function Category() {
  const router = useRouter();
  const { name } = router.query;
  const [meals, setMeals] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      await getMeals(name).then((response) => {
        setMeals(response.data.meals);
      });
      setLoading(false);
    }

    getData();
  }, [meals, name]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <motion.div
      className="mx-auto max-w-screen-lg p-10 md:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Breadcrumb title={name} />
      <h3 className="mt-5 text-3xl text-gray-800">{name} Meals</h3>
      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {meals?.map((meal) => (
          <MealCard
            key={meal.idMeal}
            category={meal.strMeal}
            thumbnail={meal.strMealThumb}
            nextLink="meal"
            params={meal.idMeal}
          />
        ))}
      </div>
    </motion.div>
  );
}
