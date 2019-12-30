import React from "react";
import { Provider } from "react-redux";

import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
};

export default App;
