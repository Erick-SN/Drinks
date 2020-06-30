import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import CategoriesProvider from './context/CategoriesContext';
import RecipesProvider from './context/RecipesContext';
import ModalProvider from './context/ModalContext';
function App() {
  return (
    <>
      <CategoriesProvider>
        <RecipesProvider>
          <ModalProvider>
            <Header />
            <div className='container mt-5'>
              <div className='row'>
                <Form />
              </div>
              <List />
            </div>
          </ModalProvider>
        </RecipesProvider>
      </CategoriesProvider>
    </>
  );
}

export default App;
