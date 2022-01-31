import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { text, test, onClick, disabled, className } = this.props;
    console.log(className);
    return (
      <button
        data-testid={ `${test}` }
        type="button"
        disabled={ disabled }
        className={ className ? `${className} btn` : 'btn' }
        onClick={ onClick }
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  test: PropTypes.string.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  text: '',
  className: '',
};

export default Button;
