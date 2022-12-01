import { bool } from 'prop-types';

const prop = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: bool,
  onInputChange: () => { console.log('oi'); },
  onSaveButtonClick: () => { console.log('tchau'); },
};

export default prop;
