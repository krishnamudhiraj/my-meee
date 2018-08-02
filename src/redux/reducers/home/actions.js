import { ONAPPLOAD_REQUESTED, ONAPPLOAD_COMPLETED } from './types';

export const onAppLoad = () => async (dispatch, getState) => {
  // const {} = getState();

  dispatch({ type: ONAPPLOAD_REQUESTED });

  setTimeout(() => {
    dispatch({ type: ONAPPLOAD_COMPLETED });
  }, 10000);
};
