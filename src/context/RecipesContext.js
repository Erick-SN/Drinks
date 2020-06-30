import React, { createContext, useState } from 'react';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [searchRecipes, setSearchRecipes] = useState({
    name: '',
    category: '',
  });
  return (
    <RecipesContext.Provider value={{ setSearchRecipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
