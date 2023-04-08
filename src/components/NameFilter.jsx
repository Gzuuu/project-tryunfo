import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameFilter extends Component {
  render() {
    const { cardFilter, disabled } = this.props;
    return (
      <div>
        <label htmlFor="cardFilter">
          <input
            type="text"
            id="cardFilter"
            data-testid="name-filter"
            placeholder="Nome da Carta"
            onChange={ cardFilter }
            disabled={ disabled }
            className="filter-name"
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
