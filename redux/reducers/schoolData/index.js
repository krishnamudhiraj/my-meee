import initialState from '../../store/initialState';
import { ON_SCHOOL_NAMES_REQUESTED, ON_SCHOOL_NAMES_FETCHED, ON_SCHOOL_DATA_REQUESTED, ON_SCHOOL_DATA_FETCHED } from './types';

export default function(state = initialState.schoolData, action) {
  switch (action.type) {
    case ON_SCHOOL_NAMES_REQUESTED:
      return { ...state, isLoading: true };
    case ON_SCHOOL_NAMES_FETCHED:
      return { ...state, isLoading: false, schoolList: action.schoolList };
    case ON_SCHOOL_DATA_REQUESTED:
      return { ...state, isLoading: true };
    case ON_SCHOOL_DATA_FETCHED:
      return { ...state, isLoading: false, schoolData: action.schoolData };
    default: {
      return state;
    }
  }
}
