import React, { Component } from 'react';
import '../styles/form-style.css';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      allCard,
    } = this.props;
    const any = allCard.some((card) => card.cardTrunfo === true);
    const trunfo = (
      <label htmlFor="cardTrunfo">
        Super Trunfo
        <input
          id="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>);

    const trunfoSpan = <span>Você já tem um Super Trunfo em seu baralho</span>;

    const trunfoCheck = (any) ? trunfoSpan : trunfo;

    return (
      <div className="div-form">
        <form>
          <Input
            id="cardName"
            type="text"
            inner="Nome"
            testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
          <label htmlFor="description">
            Descrição
            <textarea
              id="cardDescription"
              cols="30"
              rows="10"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <Input
            id="cardAttr1"
            type="number"
            inner="Atributo 1"
            testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
          <Input
            id="cardAttr2"
            type="number"
            inner="Atributo 2"
            testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
          <Input
            id="cardAttr3"
            type="number"
            inner="Atributo 3"
            testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
          <Input
            id="cardImage"
            type="text"
            inner="Imagem"
            testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
          <label htmlFor="cardRare">
            Raridade
            <select
              id="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          {trunfoCheck}
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  allCard: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.bool, PropTypes.func],
  ))).isRequired,
};

export default Form;
