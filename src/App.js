import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import prop from './data';
import './styles/app.css';
import AllCards from './components/AllCards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...prop,
      allCard: [],
    };
  }

  deleteCard = (cardCompare) => {
    console.log(cardCompare);
    const { allCard } = this.state;
    this.setState((prev) => ({
      ...prev,
      hasTrunfo: prev.cardTrunfo,
      allCard: allCard.filter((card) => card !== cardCompare),
    }));
    this.setState((prev) => ({
      ...prev,
    }));
  };

  onInputChange = ({ target }) => {
    const { id, value, type, checked } = target;
    this.setState({
      [id]: type === 'checkbox' ? checked : value,
    }, this.validationFields);
  };

  trunfoCheck = () => {
    const { allCard } = this.state;
    return allCard.some((card) => (card.hasTrunfo || card.cardTrunfo));
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const card = {
      ...this.state,
    };
    delete card.allCard;
    this.setState(({ allCard }) => ({
      allCard: [...allCard, card],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      hasTrunfo: (card.cardTrunfo || this.trunfoCheck()),
      cardTrunfo: false,
    }));
  };

  validationFields = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    const maxSingleAttr = 90;
    const maxCalc = 210;

    const att1check = cardAttr1 >= 0 && cardAttr1 <= maxSingleAttr;
    const att2check = cardAttr2 >= 0 && cardAttr2 <= maxSingleAttr;
    const att3check = cardAttr3 >= 0 && cardAttr3 <= maxSingleAttr;
    const atkSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxCalc;
    const validationName = cardName.length > 0;
    const validationDescription = cardDescription.length > 0;
    const validationImage = cardImage.length > 0;
    const validationRare = cardRare.length > 0;

    this.setState({
      isSaveButtonDisabled: !(att1check && att2check && att3check
        && atkSum && validationName && validationDescription
        && validationImage && validationRare),
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, allCard, hasTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="form-container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
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
        </div>
        <AllCards cards={ allCard } deleteCard={ this.deleteCard } />
      </div>
    );
  }
}

export default App;
