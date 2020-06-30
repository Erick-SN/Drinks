import React from 'react';
const Recipe = ({ recipe }) => {
  return (
    <>
      <div className='col-md-4 mb-2'>
        <div className='card'>
          <h4 className='card-header text-center'>{recipe.strDrink}</h4>
          <div className='card-body'>
            <button type='button' className='btn btn-block btn-primary'>
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
