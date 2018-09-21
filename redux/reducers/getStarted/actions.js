import { ON_SIGNUP_REQUESTED, ON_SIGNUP_COMPLETED, ON_SIGNUP_FAILED, ON_UPDATE_USER_REQUESTED, ON_UPDATE_USER_COMPLETED } from './types';
import { searchCode, updateCodeUsed, searchSchoolCode } from '../../../services/code';
import { updateUserData } from '../../../services/schools';
import { fetchUser } from '../../../services/users';

export const onSignupRequested = (code) => async (dispatch, getState) => {
  // const {} = getState();
  dispatch({ type: ON_SIGNUP_REQUESTED });

  const codeData = await searchCode(Number(code));

  if (codeData.response === false) {
    dispatch({ type: ON_SIGNUP_FAILED, status: codeData.message });
    return false;
  } else {
    const fetchUserData = await fetchUser(codeData.data.customer_id);
    const { name, email } = fetchUserData.data;

    await updateCodeUsed(codeData.id, code);
    dispatch({ type: ON_SIGNUP_COMPLETED, status: 'success', name, email });
    return true;
  }
};

export const onSchoolSignupRequested = (code) => async (dispatch, getState) => {
  // const {} = getState();

  dispatch({ type: ON_SIGNUP_REQUESTED });

  const { response, message, id, data } = await searchSchoolCode(Number(code));
  if (response) {
    dispatch({
      type: ON_SIGNUP_COMPLETED,
      status: message,
      schoolName: data.school_name,
      schoolKey: id
    });
  } else {
    dispatch({ type: ON_SIGNUP_FAILED, status: message });
  }
};

export const onUpdatingDeatils = (userData) => async (dispatch, getState) => {
  // const {} = getState();

  const { schoolUserKey } = getState().code;

  dispatch({ type: ON_UPDATE_USER_REQUESTED });

  const codeData = await updateUserData(schoolUserKey, userData);

  if (codeData.response === false) {
    dispatch({ type: ON_UPDATE_USER_COMPLETED, status: 'Failed to update user Data.' });
  } else {
    dispatch({ type: ON_UPDATE_USER_COMPLETED, status: 'success' });
  }
};
