import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const ListCards = (props) => {
  const { listItems, keyName, keyURLImage } = props;

  return (
    <div>
      {listItems.map((item, index) => (
        <Card
          key={ index }
          index={ index }
          item={ item }
          keyName={ keyName }
          keyURLImage={ keyURLImage }
        />
      ))}
    </div>
  );
};

ListCards.propTypes = {
  listItems: PropTypes.array,
}.isRequired;

export default ListCards;
