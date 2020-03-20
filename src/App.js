import React, { useContext, useReducer } from 'react';
import Context from './management/context';
import reducer from './management/reducer';
import List from './components/List';
import ListHooks from './components/ListHooks';


const App = () => {

  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <h1>Ejemplo Context API</h1>
      <List />
      <br />
      <ListHooks />
    </Context.Provider>
  );
}

export default App;
