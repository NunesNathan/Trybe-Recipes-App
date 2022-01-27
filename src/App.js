import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';
import './styles/BottomMenu.css';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explorer from './pages/Explorer';
import BottomMenu from './components/BottomMenu';

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
      >
        <Drinks />
      </Route>
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
      >
        <Explorer />
      </Route>
      <Route
        path="/explore/foods"
        exact
      >
        <BottomMenu />
      </Route>
      <Route
        path="/explore/drinks"
        exact
      >
        <BottomMenu />
      </Route>
      <Route
        path="/explore/foods/ingredients"
        exact
      >
        <BottomMenu />
      </Route>
      <Route
        path="/explore/drinks/ingredients"
        exact
      >
        <BottomMenu />
      </Route>
      <Route
        path="/explore/foods/nationalities"
        exact
      >
        <BottomMenu />
      </Route>
      <Route
        path="/profile"
        exact
      >
        <BottomMenu />
      </Route>
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
