import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const categories = await axios.get(URL);
      setCategories(categories.data.drinks);
    };
    getData();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
