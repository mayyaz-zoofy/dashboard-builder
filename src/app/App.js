import { BrowserRouter } from 'react-router-dom';
import AppContext from './contexts/AppContext';
import routes from '../configs/routes';
import Root from "./Root";
import React from "react";

function App() {
  return (
      <AppContext.Provider
          value={{
              routes
          }}
      >
          <BrowserRouter>
              <Root />
          </BrowserRouter>
      </AppContext.Provider>
  );
}

export default App;
