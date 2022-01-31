import React, { Component } from 'react';
import { string, func } from 'prop-types';

class Input extends Component {
  render() {
    const {
      type,
      name,
      label,
      onChange,
      value,
      id,
      dataTestId,
      placeholder,
      min,
      max,
      step,
    } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ id }
          data-testid={ dataTestId }
          placeholder={ placeholder }
          min={ min }
          max={ max }
          step={ step }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: string.isRequired,
  label: string,
  value: string,
  name: string,
  id: string,
  dataTestId: string,
  onChange: func,
  placeholder: string,
  min: string,
  max: string,
  step: string,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  dataTestId: '',
  placeholder: '',
  onChange: null,
  min: '',
  max: '',
  step: '',
};

export default Input;
