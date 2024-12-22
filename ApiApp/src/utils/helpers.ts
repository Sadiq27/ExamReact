import { Ingredient, Meal } from "./types";

export const convertStringToHashtagArray = (input: string): string[] => {
    return input
        .split(',')
        .map(item => `#${item.trim().toLowerCase()}`);
}

export const transformToMeal = (rawData: any): Meal => {
    const ingredients: Ingredient[] = Object.keys(rawData)
      .filter((key) => key.startsWith("strIngredient") && rawData[key])
      .map((key, index) => {
        const measureKey = `strMeasure${index + 1}`;
        return {
          strIngredient: rawData[key],
          strMeasure: rawData[measureKey] || "",
        };
    });
  
    return {
      ...rawData,
      ingredients: ingredients,
    };
  };