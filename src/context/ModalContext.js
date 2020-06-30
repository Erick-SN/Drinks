import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idRecipe, setIdRecipe] = useState(null);
  const [recipeInfo, setRecipe] = useState([]);
  useEffect(() => {
    if (!idRecipe) return;
    const getData = async () => {
      const URl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
      const response = await axios.get(URl);
      setRecipe(response.data.drinks[0]);
    };
    getData();
  }, [idRecipe]);
  return (
    <ModalContext.Provider value={{ setIdRecipe, recipeInfo, setRecipe }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
