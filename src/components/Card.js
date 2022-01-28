import PropTypes from 'prop-types';
import React from 'react';

const Card = (props) => {
  const { index, item, keyName, keyURLImage } = props;

  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img src={ item[keyURLImage] } alt={ item[keyName] } />
      <h3 data-testid={ `${index}-card-name` }>{ item[keyName] }</h3>
    </div>
  );
};

Card.propTypes = {
  index: PropTypes.number,
  item: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }),
}.isRequired;

export default Card;
