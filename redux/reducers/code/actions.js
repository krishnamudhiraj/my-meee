
import {
  ON_LOGIN_REQUESTED,
  ON_LOGIN_COMPLETED,
  ON_SCHOOL_LOGIN_COMPLETED,
  ON_SCHOOL_LOGIN_FAILED,
  ON_LOGOUT_REQUESTED,
  ON_LOGOUT_COMPLETED
} from './types';
import { updateCodeUsed, fetchAllowedUserAndCode, checkTimesCodeAlreadyUsed, setCodeUsed, addSchoolUser } from '../../../services/code';

export const onLogin = () => async (dispatch, getState) => {
  dispatch({ type: ON_LOGIN_REQUESTED });
  dispatch({ type: ON_LOGIN_COMPLETED, isLoggedIn: true });
};

export const onSchoolLogin = () => async (dispatch, getState) => {
  dispatch({ type: ON_LOGIN_REQUESTED });
  const { schoolKey, schoolName } = getState().getStarted;
  const fetchAllowedUserAndCodeData = await fetchAllowedUserAndCode(schoolKey);
  const checkTimesCodeAlreadyUsedData = await checkTimesCodeAlreadyUsed(fetchAllowedUserAndCodeData.code);

  if (fetchAllowedUserAndCodeData.allowedUser === checkTimesCodeAlreadyUsedData.timeCodeAlreadyUsed + 1) {
    await setCodeUsed(schoolKey);
  }
  if (fetchAllowedUserAndCodeData.allowedUser > checkTimesCodeAlreadyUsedData.timeCodeAlreadyUsed) {
    const { response, message, schoolUserKey } = await addSchoolUser(fetchAllowedUserAndCodeData.code, schoolName);
    if (response) {
      dispatch({
        type: ON_SCHOOL_LOGIN_COMPLETED,
        isLoggedInSchool: true,
        message,
        schoolUserKey
      });
      return true;
    } else {
      dispatch({ type: ON_SCHOOL_LOGIN_FAILED, message: 'Error while adding user.' });
      return false;
    }
  } else {
    dispatch({
      type: ON_SCHOOL_LOGIN_FAILED,
      message: 'Sorry, maximum number of users for this code reached.'
    });
    return false;
  }
};

export const onLogout = () => async (dispatch, getState) => {
  dispatch({ type: ON_LOGOUT_REQUESTED });
  dispatch({ type: ON_LOGOUT_COMPLETED, isLoggedIn: false, isLoggedInSchool: false });
};
