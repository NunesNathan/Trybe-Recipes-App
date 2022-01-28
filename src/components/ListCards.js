import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const MAX_RECIPES = 12;

const ListCards = (props) => {
  const { listItems, keyName, keyURLImage } = props;

  return (
    <div>
      {listItems.map((item, index) => {
        if (index < MAX_RECIPES) {
          return (
            <Card
              key={ index }
              index={ index }
              item={ item }
              keyName={ keyName }
              keyURLImage={ keyURLImage }
            />
          );
        }
        return null;
      })}
    </div>
  );
};

ListCards.propTypes = {
  listItems: PropTypes.array,
}.isRequired;

export default ListCards;
