import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { id, type, inner, testid, value, onChange, className } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          {inner}
          <input
            type={ type }
            id={ id }
            data-testid={ testid }
            value={ value }
            onChange={ onChange }
            className={ className }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inner: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  className: '',
};

export default Input;
