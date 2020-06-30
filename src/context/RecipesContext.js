import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [searchRecipes, setSearchRecipes] = useState({
    name: '',
    category: '',
  });
  const [query, setQuery] = useState(false);
  const { name, category } = searchRecipes;
  useEffect(() => {
    if (query) {
      const getData = async () => {
        const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
        const response = await axios.get(URL);
        setRecipes(response.data.drinks);
      };
      getData();
    }
  }, [searchRecipes]);
  return (
    <RecipesContext.Provider value={{ setSearchRecipes, setQuery, recipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
