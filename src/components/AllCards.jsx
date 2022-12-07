import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends Component {
  render() {
    const { cards, deleteCard, cardFilter, rarityFilter, trunfoFilter } = this.props;
    return (
      <div>
        {cards
          .filter((card) => card.cardName.includes(cardFilter))
          .filter((card) => ((rarityFilter === 'todas')
            ? card.cardRare !== rarityFilter
            : card.cardRare === rarityFilter))
          .filter((card) => {
            const filtered = card.cardTrunfo === trunfoFilter;
            if (trunfoFilter) return filtered;
            return card;
          })
          .map((card, index) => {
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
                  onClick={ () => deleteCard(card, index) }
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
  deleteCard: PropTypes.func.isRequired,
  cardFilter: PropTypes.string.isRequired,
  rarityFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default AllCards;
