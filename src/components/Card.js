import React from 'react';

const Card = (props) => {
  const { item, key } = props;

  return (
    <div data-testid={ `${key}-recipe-card` } />
  );
};

export default Card;
