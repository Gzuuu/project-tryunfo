import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RarityFilter extends Component {
  render() {
    const { cardFilter } = this.props;
    return (
      <div>
        <label htmlFor="cardRarity">
          Raridade da carta
          <select
            id="cardRarity"
            onChange={ cardFilter }
            defaultValue="todas"
            data-testid="rare-filter"
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}

RarityFilter.propTypes = {
  cardFilter: PropTypes.string.isRequired,
};

export default RarityFilter;
