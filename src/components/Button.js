import PropType from 'prop-types';
import React from 'react';

class Button extends React.Component {
  render() {
    const { text, test, style, onClick, disabled, src } = this.props;
    return (
      <button
        data-testid={ `${test}` }
        type="button"
        disabled={ disabled }
        style={ style }
        onClick={ onClick }
        src={ src }
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropType.string.isRequired,
  test: PropType.string.isRequired,
  disabled: PropType.bool,
  onClick: PropType.func.isRequired,
  src: PropType.string,
};

Button.defaultProps = {
  style: { border: '' },
  disabled: false,
  src: '',
};

export default Button;
