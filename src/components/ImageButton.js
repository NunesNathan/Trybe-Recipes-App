import React from 'react';
import PropTypes from 'prop-types';

export default function ImageButton({ src, test, onClick, alt }) {
  return (
    <button
      data-testid={ test }
      type="button"
      onClick={ onClick }
    >
      <img src={ src } alt={ alt } />
    </button>);
}

ImageButton.propTypes = {
  src: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};
