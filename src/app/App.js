import { BrowserRouter } from 'react-router-dom';
import AppContext from './AppContext';
import routes from '../configs/routes';
import Root from "./Root";

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
