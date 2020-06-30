import React, { createContext, useState } from 'react';

export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
  return (
    <CategoriesContext.Provider value={{}}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
