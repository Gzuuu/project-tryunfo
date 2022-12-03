import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div>
        {
          cards.map((card, index) => {
            const {
              cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo,
            } = card;
            return (<Card
              key={ index }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />);
          })
        }
      </div>
    );
  }
}

AllCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.bool, PropTypes.func],
  ))).isRequired,
};

export default AllCards;
