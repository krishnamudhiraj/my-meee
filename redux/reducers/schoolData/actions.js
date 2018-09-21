import { ON_SCHOOL_NAMES_REQUESTED, ON_SCHOOL_NAMES_FETCHED, ON_SCHOOL_DATA_REQUESTED, ON_SCHOOL_DATA_FETCHED } from './types';
import { fetchSchools, fetchSchoolDataService } from '../../../services/schools';

export const fetchSchoolNames = () => async (dispatch, getState) => {
  dispatch({ type: ON_SCHOOL_NAMES_REQUESTED });
  const schoolList = await fetchSchools();
  const schoolArrayList = [];
  schoolList.forEach(element => {
    schoolArrayList.push({ label: element });
  });

  dispatch({ type: ON_SCHOOL_NAMES_FETCHED, schoolList: schoolArrayList });
};

export const fetchSchoolData = (schoolname) => async (dispatch, getState) => {
  dispatch({ type: ON_SCHOOL_DATA_REQUESTED });
  const schoolData = await fetchSchoolDataService(schoolname);
  dispatch({ type: ON_SCHOOL_DATA_FETCHED, schoolData });
};
