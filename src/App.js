import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Foods from './pages/Foods';
import Provider from './context/Provider';
import Drinks from './pages/Drinks';

function App() {
  const routes = () => (
    <Switch>
      <Route
        exact
        path="/"
      >
        <Home />
      </Route>
      <Route
        exact
        path="/foods"
      >
        <Foods />
      </Route>
      <Route
        exact
        path="/drinks"
      >
        <Drinks />
      </Route>
      <Route
        path="/foods/{id-da-receita}"
      />
      <Route
        exact
        path="/drinks/{id-da-receita}"
      />
      <Route
        exact
        path="/foods/{id-da-receita}/in-progress"
      />
      <Route
        exact
        path="/drinks/{id-da-receita}/in-progress"
      />
      <Route
        exact
        path="/explore"
      />
      <Route
        exact
        path="/explore/foods"
      />
      <Route
        exact
        path="/explore/drinks"
      />
      <Route
        exact
        path="/explore/foods/ingredients"
      />
      <Route
        exact
        path="/explore/drinks/ingredients"
      />
      <Route
        exact
        path="/explore/foods/nationalities"
      />
      <Route
        exact
        path="/profile"
      />
      <Route
        exact
        path="/done-recipes"
      />
      <Route
        exact
        path="/favorite-recipes"
      />
    </Switch>
  );
  return (
    <Provider>
      {
        routes()
      }
    </Provider>);
}

export default App;
