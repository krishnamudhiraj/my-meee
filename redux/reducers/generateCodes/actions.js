import { ON_GENERATE_CODES_REQUESTED, ON_GENERATE_CODES_COMPLETED } from './types';
import { generateSchoolCodes } from '../../../services/schools';

import { productionURL, developmentURL } from '../../../config/constants';
const url =
  process.env.NODE_ENV === 'production' ? productionURL : developmentURL;


export const generateCodes = (data) => async (dispatch, getState) => {
  const { admin } = getState();
  console.log('Email - getstate: ', admin.email);

  dispatch({ type: ON_GENERATE_CODES_REQUESTED });
  const { response, codes } = await generateSchoolCodes(data);
  const isCodeGenerated = response;

  if (isCodeGenerated) {
    await sendCodeMailSchool({ email: admin.email, school: data.school, codes, allowed_users: data.numberOfCodes });
    dispatch({
      type: ON_GENERATE_CODES_COMPLETED,
      message: 'Codes successfully generated and sent to the provided Email ID.'
    });
    setTimeout(() => {
      dispatch({ type: ON_GENERATE_CODES_COMPLETED, message: '' });
    }, 5000);
  } else {
    dispatch({ type: ON_GENERATE_CODES_COMPLETED, message: 'Server Error! Code Generation Failed.' });
    setTimeout(() => {
      dispatch({ type: ON_GENERATE_CODES_COMPLETED, message: '' });
    }, 5000);
  }
};

async function sendCodeMailSchool(userData) {
  try {
    await fetch(
      `${url}sendCodeMailSchool`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      }
    );
  } catch (error) {
    console.error(error);
  }
}
