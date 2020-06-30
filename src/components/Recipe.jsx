import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
const Recipe = ({ recipe }) => {
  const { setIdRecipe } = useContext(ModalContext);
  return (
    <>
      <div className='col-md-4 mb-2'>
        <div className='card'>
          <h4 className='card-header text-center'>{recipe.strDrink}</h4>
          <div className='card-body'>
            <button
              type='button'
              className='btn btn-block btn-primary'
              onClick={() => {
                setIdRecipe(recipe.idDrink);
              }}>
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
