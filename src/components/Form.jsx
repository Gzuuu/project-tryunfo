import React, { Component } from 'react';
import '../styles/form-style.css';

export class Forms extends Component {
  render() {
    return (
      <div className="div-form">
        <form>
          <label htmlFor="name">
            Nome
            <input type="text" data-testid="name-input" id="name" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="textarea" data-testid="description-input" id="description" />
          </label>
          <label htmlFor="attr1">
            Atributo 1
            <input type="number" data-testid="attr1-input" id="attr1" />
          </label>
          <label htmlFor="attr2">
            Atributo 2
            <input type="number" data-testid="attr2-input" id="attr2" />
          </label>
          <label htmlFor="attr3">
            Atributo 3
            <input type="number" data-testid="attr3-input" id="attr3" />
          </label>
          <label htmlFor="image">
            Imagem
            <input type="text" data-testid="image-input" id="image" />
          </label>
          <label htmlFor="rarity">
            Raridade
            <select id="rarity" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="triumph">
            Super Trunfo
            <input type="checkbox" data-testid="trunfo-input" id="triumph" />
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Forms;
