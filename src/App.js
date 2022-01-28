import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DoneRecipes from './pages/DoneRecipes';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoods from './pages/ExploreFoods';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreNationalities from './pages/ExploreNationalities';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Foods from './pages/Foods';
import Provider from './context/Provider';
import Profile from './pages/Profile';
import './styles/App.css';
import './styles/BottomMenu.css';
import './styles/index.css';
import Login from './pages/Login';
import BottomMenu from './components/BottomMenu';

function App() {
  const routes = () => (
    <Switch>
      <Route
        exact
        path="/"
      >
        <Login />
      </Route>
      <Route
        exact
        path="/foods"
      >
        <Foods />
        <BottomMenu />
      </Route>
      <Route
        exact
      >
        <Drinks />
        <BottomMenu />
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
      >
        <Explore />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/explore/foods"
      >
        <ExploreFoods />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/explore/drinks"
      >
        <ExploreDrinks />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/explore/foods/ingredients"
      >
        <ExploreFoodsIngredients />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/explore/drinks/ingredients"
      >
        <ExploreDrinksIngredients />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/explore/foods/nationalities"
      >
        <ExploreNationalities />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/profile"
      >
        <Profile />
        <BottomMenu />
      </Route>
      <Route
        exact
        path="/done-recipes"
      >
        <DoneRecipes />
      </Route>
      <Route
        exact
        path="/favorite-recipes"
      >
        <FavoriteRecipes />
      </Route>
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
