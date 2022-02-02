import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { index, item, keyName, keyURLImage, testCard, linked, pathname, idName } = props;

  const listItem = () => (
    <li
      className="list-card"
      data-testid={ `${index}-${testCard}` }
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

  const path = idName ? `${pathname}/${item[idName]}` : pathname;

  return (
    linked ? (
      <Link
        to={ {
          pathname: path,
          state: { keyName: item[keyName] },
        } }
      >
        {listItem()}
      </Link>
    ) : listItem()
  );
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
  keyName: PropTypes.string.isRequired,
  keyURLImage: PropTypes.string.isRequired,
  testCard: PropTypes.string,
  linked: PropTypes.bool,
  pathname: PropTypes.string,
  idName: PropTypes.string,
};

Card.defaultProps = {
  testCard: 'recipe-card',
  linked: false,
  pathname: '',
  idName: '',
};

export default Card;
