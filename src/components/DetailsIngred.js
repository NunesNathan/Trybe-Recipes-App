import { object } from 'prop-types';
import React, { Component } from 'react';

export default class DetailsIngred extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: [],
      measures: [],
    };

    this.ingredientsAndMeasure = this.ingredientsAndMeasure.bind(this);
  }

  componentDidMount() {
    this.ingredientsAndMeasure();
  }

  ingredientsAndMeasure() {
    const { recipe } = this.props;
    const ingredients = Object.entries(recipe)
      .filter((items) => items[0].includes('strIngredient'))
      .filter((items) => items[1])
      .map((el) => el[1]);
    this.setState({ ingredients });

    const measures = Object.entries(recipe)
      .filter((items) => items[0].includes('strMeasure'))
      .filter((items) => items[1])
      .map((el) => el[1]);
    this.setState({ measures });
  }

  render() {
    const { ingredients, measures } = this.state;
    return (
      <ul>
        {ingredients.map((item, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {`${item} - ${measures[index]}`}

          </li>))}
      </ul>
    );
  }
}

DetailsIngred.propTypes = {
  recipe: object,
}.isRequired;
