import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const MAX_RECIPES = 12;

const ListCards = (props) => {
  const { listItems, keyName, keyURLImage, testCard, linked } = props;

  return (
    <ul className="list">
      {listItems.map((item, index) => {
        if (index < MAX_RECIPES) {
          return (
            <Card
              key={ index }
              index={ index }
              item={ item }
              keyName={ keyName }
              keyURLImage={ keyURLImage }
              testCard={ testCard }
              linked={ linked }
            />
          );
        }
        return null;
      })}
    </ul>
  );
};

ListCards.propTypes = {
  listItems: PropTypes.array,
}.isRequired;

ListCards.defaultProps = {
  testCard: undefined,
  linked: false,
};

export default ListCards;
