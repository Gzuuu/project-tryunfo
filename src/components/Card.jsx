import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const validator = (cardTrunfo)
      ? <h3 data-testid="trunfo-card">Super Trunfo</h3> : '';
    return (
      <div>
        <div className="teste">
          <h1 data-testid="name-card">{cardName}</h1>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">{cardDescription}</p>
          <h4 data-testid="attr1-card">{`Attr01: ${cardAttr1}`}</h4>
          <h4 data-testid="attr2-card">{`Attr02: ${cardAttr2}`}</h4>
          <h4 data-testid="attr3-card">{`Attr03: ${cardAttr3}`}</h4>
          <h3 data-testid="rare-card">{cardRare}</h3>
          {validator}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
