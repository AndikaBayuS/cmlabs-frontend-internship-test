import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
  method: "GET",
});

export function getCategories() {
  return instance.get("categories.php");
}

export function getMeals(category) {
  return instance.get(`filter.php?c=${category}`);
}

export function getMealData(id) {
  return instance.get(`lookup.php?i=${id}`);
}
