import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameFilter extends Component {
  render() {
    const { cardFilter } = this.props;
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
          />
        </label>
      </div>
    );
  }
}

NameFilter.propTypes = {
  cardFilter: PropTypes.func.isRequired,
};

export default NameFilter;
