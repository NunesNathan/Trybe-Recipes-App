import PropTypes from 'prop-types';
import React from 'react';

const Card = (props) => {
  const { index, item, keyName, keyURLImage } = props;

  return (
    <li
      className="list-card"
      data-testid={ `${index}-recipe-card` }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ item[keyURLImage] }
        alt={ item[keyName] }
      />
      <div className="card-info">
        <p data-testid={ `${index}-card-name` }>{ item[keyName] }</p>
      </div>
    </li>
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
