import initialState from '../../store/initialState';
import { ON_AUTHORISATION_REQUESTED, ON_AUTHORISATION_COMPLETED, ON_AUTHORISATION_FAILED } from './types';

export default function(state = initialState.admin, action) {
  switch (action.type) {
    case ON_AUTHORISATION_REQUESTED:
      return { ...state, isLoading: true };
    case ON_AUTHORISATION_COMPLETED:
      return { ...state, isLoading: false, isAuthorised: true, email: action.email };
    case ON_AUTHORISATION_FAILED:
      return { ...state, isLoading: false, message: action.message };
    default: {
      return state;
    }
  }
}
