import initialState from '../../store/initialState';
import { ON_EMAIL_SUBMITTING, ON_EMAIL_SUBMITTED, ON_PAYMENT_REQUESTED, ON_PAYMENT_COMPLETED } from './types';

export default function(state = initialState.payment, action) {
  switch (action.type) {
    case ON_EMAIL_SUBMITTING:
      return { ...state, isLoading: true };
    case ON_EMAIL_SUBMITTED:
      return { ...state, isLoading: false, email: action.email, isEmailSubscribed: action.isEmailSubscribed };
    case ON_PAYMENT_REQUESTED:
      return { ...state, isLoading: true };
    case ON_PAYMENT_COMPLETED:
      return { ...state, isLoading: false };
    default: {
      return state;
    }
  }
}
