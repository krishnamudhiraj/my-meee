import initialState from '../../store/initialState';
import { ONAPPLOAD_REQUESTED, ONAPPLOAD_COMPLETED } from './types';

export default function(state = initialState.home, action) {
  switch (action.type) {
    case ONAPPLOAD_REQUESTED:
      return { ...state, isLoading: true };
    case ONAPPLOAD_COMPLETED:
      return { ...state, isLoading: false };
    default: {
      return state;
    }
  }
}
