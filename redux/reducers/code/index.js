import initialState from '../../store/initialState';
import { ON_LOGIN_REQUESTED, ON_LOGIN_COMPLETED, ON_SCHOOL_LOGIN_COMPLETED, ON_SCHOOL_LOGIN_FAILED, ON_LOGOUT_REQUESTED, ON_LOGOUT_COMPLETED } from './types';

export default function(state = initialState.code, action) {
  switch (action.type) {
    case ON_LOGIN_REQUESTED:
      return { ...state, isLoading: true };
    case ON_LOGIN_COMPLETED:
      return { ...state, isLoggedIn: action.isLoggedIn, isLoading: false };
    case ON_SCHOOL_LOGIN_COMPLETED:
      return { ...state, isLoggedIn: true, isLoggedInSchool: action.isLoggedInSchool, isLoading: false, schoolUserKey: action.schoolUserKey, message: action.message };
    case ON_SCHOOL_LOGIN_FAILED:
      return { ...state, isLoading: false, message: action.message };
    case ON_LOGOUT_REQUESTED:
      return { ...state, isLoading: true };
    case ON_LOGOUT_COMPLETED:
      return { ...state, isLoggedIn: action.isLoggedIn, isLoading: false };
    default: {
      return state;
    }
  }
}
