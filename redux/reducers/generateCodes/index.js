import initialState from '../../store/initialState';
import { ON_GENERATE_CODES_REQUESTED, ON_GENERATE_CODES_COMPLETED } from './types';

export default function(state = initialState.generateCodes, action) {
  switch (action.type) {
    case ON_GENERATE_CODES_REQUESTED:
      return { ...state, isLoading: true, message: action.message };
    case ON_GENERATE_CODES_COMPLETED:
      return { ...state, isLoading: false, message: action.message };
    default: {
      return state;
    }
  }
}
