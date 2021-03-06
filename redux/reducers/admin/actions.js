import {
  ON_AUTHORISATION_REQUESTED,
  ON_AUTHORISATION_COMPLETED,
  ON_AUTHORISATION_FAILED,
  ON_AUTHORISATION_RESET,
} from './types';
import { authCheck } from '../../../services/admins';

export const adminAuth = auth => async (dispatch, getState) => {
  dispatch({ type: ON_AUTHORISATION_REQUESTED });
  const { response, message } = await authCheck(auth);
  if (response) {
    dispatch({ type: ON_AUTHORISATION_COMPLETED, email: auth.email });
    return true;
  } else {
    dispatch({ type: ON_AUTHORISATION_FAILED, message });
    setTimeout(() => {
      dispatch({ type: ON_AUTHORISATION_FAILED, message: '' });
    }, 5000);
    return false;
  }
};

export const adminAuthReset = () => async (dispatch, getState) => {
  dispatch({ type: ON_AUTHORISATION_RESET });
};
