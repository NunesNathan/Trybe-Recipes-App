import React from 'react';
import PropType from 'prop-types';

class Button extends React.Component {
  render() {
    const { text, test, onClick, disabled, src } = this.props;
    return (
      <button
        data-testid={ `${test}-btn` }
        type="button"
        src={ src }
        disabled={ disabled }
        onClick={ onClick }
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropType.string.isRequired,
  test: PropType.string.isRequired,
  src: PropType.string,
  disabled: PropType.bool,
  onClick: PropType.func.isRequired,
};

Button.defaultProps = {
  disabled: false,
  src: '',
};

export default Button;
