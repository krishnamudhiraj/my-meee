import initialState from '../../store/initialState';
import {
  ON_REQUEST_CLEAR_CARDS,
  ON_CARD_CREATION,
  ON_AVAILABLE_CARD_SELECTION,
  ON_AVAILABLE_CARD_DELETION,
  ON_MY_CARD_SELECTION,
  ON_MY_CARD_DELETION,
  ON_TOP5_CARD_SELECTION,
  ON_TOP5_CARD_DELETION,
  ON_CARDS_SUBMISSION_REQUESTED,
  ON_CARDS_SUBMISSION_SUCCESS
} from './types';

export default function(state = initialState.valueCards, action) {
  // console.log('STATE: ', state);

  switch (action.type) {
    case ON_REQUEST_CLEAR_CARDS:
      return { ...state, isLoading: true, cardsCreated: false, availableCardList: [], myCardList: [], myTopFiveCards: [], myTopFiveCardsRanking: [] };
    case ON_CARD_CREATION:
      return { ...state, availableCardList: action.availableCardList, cardsCreated: true, isLoading: false };
    case ON_MY_CARD_SELECTION:
      return { ...state, isLoading: action.isLoading, myCardList: [...state.myCardList, action.myCardList] };
    case ON_MY_CARD_DELETION:
      return { ...state, isLoading: action.isLoading, myCardList: state.myCardList.filter(item => item !== action.item) };
    case ON_AVAILABLE_CARD_SELECTION:
      return { ...state, isLoading: false, availableCardList: [...state.availableCardList, action.availableCardList] };
    case ON_AVAILABLE_CARD_DELETION:
      return { ...state, isLoading: false, availableCardList: state.availableCardList.filter(item => item !== action.item) };
    case ON_TOP5_CARD_SELECTION:
      return { ...state, isLoading: true, myTopFiveCards: [...state.myTopFiveCards, action.myTopFiveCards] };
    case ON_TOP5_CARD_DELETION:
      return { ...state, isLoading: true, myTopFiveCards: state.myTopFiveCards.filter(item => item !== action.item) };
    case ON_CARDS_SUBMISSION_REQUESTED:
      return { ...state, myTopFiveCardsRanking: action.myTopFiveCardsRanking, isLoading: true };
    case ON_CARDS_SUBMISSION_SUCCESS:
      return { ...state, isLoading: false };
    default: {
      return state;
    }
  }
}
