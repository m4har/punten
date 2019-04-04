import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Navigation from "./src/navigation";
import { Store, Persistor } from "./src/redux/Store";

export default () => (
  <Provider store={Store}>
    <PersistGate loading={null} persistor={Persistor}>
      <Navigation />
    </PersistGate>
  </Provider>
);
