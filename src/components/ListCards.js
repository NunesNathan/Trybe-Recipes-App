import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const ListCards = (props) => {
  const { listItems } = props;

  return (
    <div>
      {listItems.map((item, index) => (
        <Card key={ index } item={ item } />
      ))}
    </div>
  );
};

ListCards.propTypes = {
  listItems: PropTypes.array,
}.isRequired;

export default ListCards;
