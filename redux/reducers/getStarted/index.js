import initialState from '../../store/initialState';
import { ON_SIGNUP_REQUESTED, ON_SIGNUP_COMPLETED, ON_SIGNUP_FAILED, ON_UPDATE_USER_REQUESTED, ON_UPDATE_USER_COMPLETED, ON_UPDATE_USER_FAILED } from './types';

export default function(state = initialState.getStarted, action) {
  switch (action.type) {
    case ON_SIGNUP_REQUESTED:
      return { ...state, isLoading: true };
    case ON_SIGNUP_COMPLETED:
      return { ...state, isLoading: false, status: action.status, schoolName: action.schoolName, schoolKey: action.schoolKey, name: action.name, email: action.email };
    case ON_SIGNUP_FAILED:
      return { ...state, isLoading: false, status: action.status };
    case ON_UPDATE_USER_REQUESTED:
      return { ...state, isLoading: true };
    case ON_UPDATE_USER_COMPLETED:
      return { ...state, isLoading: false, status: action.status };
    case ON_UPDATE_USER_FAILED:
      return { ...state, isLoading: false, status: action.status };
    default: {
      return state;
    }
  }
}
