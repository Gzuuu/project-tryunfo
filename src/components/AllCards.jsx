import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends Component {
  render() {
    const { cards, deleteCard } = this.props;
    return (
      <div>
        {cards.map((card, index) => {
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
        const eachCard = (
          <div key={ index }>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
            <button
              type="button"
              data-testid="delete-button"
              onClick={() => deleteCard(cardName)}
            >
              Excluir
            </button>
          </div>);
        return eachCard;
      })}
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
