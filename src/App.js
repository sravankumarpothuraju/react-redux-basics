import React from "react";
import { Provider } from "react-redux";

import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CakeContainer from "./components/CakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
};

export default App;
