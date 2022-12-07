import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameFilter extends Component {
  render() {
    const { cardFilter, disabled } = this.props;
    return (
      <div>
        <label htmlFor="cardFilter">
          Nome da Carta
          <input
            type="text"
            id="cardFilter"
            data-testid="name-filter"
            placeholder="Ex: Pikachu..."
            onChange={ cardFilter }
            disabled={ disabled }
          />
        </label>
      </div>
    );
  }
}

NameFilter.propTypes = {
  cardFilter: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default NameFilter;
