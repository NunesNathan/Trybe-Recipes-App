import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { text, test, onClick, disabled, src } = this.props;
    return (
      <button
        data-testid={ `${test}` }
        type="button"
        disabled={ disabled }
        onClick={ onClick }
        src={ src }
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string,
  test: PropTypes.string.isRequired,
  text: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  src: '',
  text: '',
};

export default Button;
