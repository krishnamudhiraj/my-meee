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

import { productionURL, developmentURL } from '../../../config/constants';
const url =
  process.env.NODE_ENV === 'production' ? productionURL : developmentURL;

export const clearCards = (list) => async (dispatch, getState) => {
  dispatch({ type: ON_REQUEST_CLEAR_CARDS });
};

export const createCardsArray = (list) => async (dispatch, getState) => {
  // const {} = getState();

  setTimeout(() => {
    dispatch({ type: ON_CARD_CREATION, availableCardList: list });
  }, 2000);
};

export const onCardSelection = (item) => async (dispatch, getState) => {
  // const {} = getState();

  dispatch({ type: ON_MY_CARD_SELECTION, isLoading: true, myCardList: item });
  dispatch({ type: ON_AVAILABLE_CARD_DELETION, item });
};

export const onCardDeletion = (item) => async (dispatch, getState) => {
  // const {} = getState();

  dispatch({ type: ON_MY_CARD_DELETION, isLoading: true, item });
  dispatch({ type: ON_AVAILABLE_CARD_SELECTION, availableCardList: item });
};

export const onTop5CardSelection = (item) => async (dispatch, getState) => {
  // const {} = getState();

  dispatch({ type: ON_TOP5_CARD_SELECTION, myTopFiveCards: item, isLoading: true });
  dispatch({ type: ON_MY_CARD_DELETION, item, isLoading: false });
};

export const onTop5CardDeletion = (item) => async (dispatch, getState) => {
  // const {} = getState();

  dispatch({ type: ON_TOP5_CARD_DELETION, item });
  dispatch({ type: ON_MY_CARD_SELECTION, myCardList: item, isLoading: false });
};

export const onTop5CardDeletionFromValues = (item) => async (dispatch, getState) => {
  // const {} = getState();

  dispatch({ type: ON_TOP5_CARD_DELETION, item });
  dispatch({ type: ON_AVAILABLE_CARD_SELECTION, availableCardList: item });
};

export const onCardSubmission = (item) => async (dispatch, getState) => {
  const { name, email } = getState().getStarted;
  const date = getCurrentDate();

  dispatch({
    type: ON_CARDS_SUBMISSION_REQUESTED,
    myTopFiveCardsRanking: { cards: item, name, email, date }
  });
  setTimeout(() => {
    dispatch({ type: ON_CARDS_SUBMISSION_SUCCESS });
  }, 2000);
};

export const mailMePDF = (email) => async (dispatch, getState) => {
  const myTopFiveCardsRanking = getState().valueCards.myTopFiveCardsRanking;

  try {
    const response = await fetch(`${url}sendMePDF`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, myTopFiveCardsRanking })
    });
    const responseJson = await response.json();
  } catch (err) {
    console.log('Error - mailMePDF: ', err);
  }
};

function getCurrentDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  today = dd + '/' + mm + '/' + yyyy;
  return (today);
}
