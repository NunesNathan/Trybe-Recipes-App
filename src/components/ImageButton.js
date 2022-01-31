import React from 'react';
import PropTypes from 'prop-types';

export default function ImageButton({ src, test, onClick, alt }) {
  return (
    <button
      type="button"
      className="btn"
      onClick={ onClick }
    >
      <img
        src={ src }
        alt={ alt }
        data-testid={ test }
      />
    </button>);
}

ImageButton.propTypes = {
  src: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  alt: PropTypes.string,
};

ImageButton.defaultProps = {
  alt: '',
};
