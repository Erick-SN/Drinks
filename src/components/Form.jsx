import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import { RecipesContext } from '../context/RecipesContext';
const Form = () => {
  const { categories } = useContext(CategoriesContext);
  const { setSearchRecipes, setQuery } = useContext(RecipesContext);
  const [search, setSearch] = useState({
    name: '',
    category: '',
  });
  const getDataRecipe = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setSearchRecipes(search);
    setQuery(true);
  };
  return (
    <>
      <form className='col-12' onSubmit={onSubmit}>
        <fieldset className='text-center'>
          <legend>Search Drinks</legend>
        </fieldset>
        <div className='row mt-4'>
          <div className='col-md-4'>
            <input
              name='name'
              className='form-control'
              type='text'
              placeholder='Search by ingredient'
              onChange={getDataRecipe}
            />
          </div>
          <div className='col-md-4'>
            <select
              className='form-control'
              name='category'
              onChange={getDataRecipe}>
              <option value=''>--Select--</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </select>
          </div>
          <div className='col-md-4'>
            <input
              type='submit'
              className='btn btn-block btn-primary'
              value='Search Recipes'
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
