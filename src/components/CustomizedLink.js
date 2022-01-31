import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { string, element } from 'prop-types';

export default function CustomizedLink({ path, test, src, son, alt }) {
  return (
    <Link
      to={ path }
    >
      {son || (
        <img
          data-testid={ test }
          src={ src }
          alt={ alt || test }
        />)}
    </Link>);
}

CustomizedLink.propTypes = {
  path: string.isRequired,
  test: string,
  src: string,
  alt: string,
  son: PropTypes.oneOfType([string, element]),
};

CustomizedLink.defaultProps = {
  son: '',
  alt: '',
  src: '',
  test: '',
};
