import React from "react";
import Main from "./Components/Main";
import store from "./Redux/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
