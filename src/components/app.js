import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./app.css";
import Home from "./pages/home";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/* routes */}
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
