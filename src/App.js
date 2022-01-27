import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Foods from './pages/Foods';
import Home from './pages/Home';

function App() {
  const routes = () => (
    <Switch>
      <Route
        path="/"
        exact
      >
        <Home />
      </Route>
      <Route
        path="/foods"
        exact
      >
        <Foods />
      </Route>
      <Route
        path="/drinks"
        exact
      />
      <Route
        path="/foods/{id-da-receita}"
      />
      <Route
        path="/drinks/{id-da-receita}"
        exact
      />
      <Route
        path="/foods/{id-da-receita}/in-progress"
        exact
      />
      <Route
        path="/drinks/{id-da-receita}/in-progress"
        exact
      />
      <Route
        path="/explore"
        exact
      />
      <Route
        path="/explore/foods"
        exact
      />
      <Route
        path="/explore/drinks"
        exact
      />
      <Route
        path="/explore/foods/ingredients"
        exact
      />
      <Route
        path="/explore/drinks/ingredients"
        exact
      />
      <Route
        path="/explore/foods/nationalities"
        exact
      />
      <Route
        path="/profile"
        exact
      />
      <Route
        path="/done-recipes"
        exact
      />
      <Route
        path="/favorite-recipes"
        exact
      />
    </Switch>
  );
  return (
    <>
      {
        routes()
      }
    </>);
}

export default App;
