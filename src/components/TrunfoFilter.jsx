import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrunfoFilter extends Component {
  render() {
    const { cardFilter, checked } = this.props;
    return (
      <div>
        <label htmlFor="trunfoCheck" className="filter-trunfo">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            id="trunfoCheck"
            checked={ checked }
            onChange={ cardFilter }
          />
        </label>
      </div>
    );
  }
}

TrunfoFilter.propTypes = {
  cardFilter: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default TrunfoFilter;
