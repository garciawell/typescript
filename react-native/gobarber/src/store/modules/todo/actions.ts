export const Types = {
  GET_REQUEST: 'users/GET_REQUEST',
  GET_SUCCESS: 'users/GET_SUCCESS',
  GET_FAILURE: 'users/GET_FAILURE',

  SET_CURRENT_USER: 'users/SET_CURRENT_USER',
};

export const Creators = {
  getUsers: (data) => ({
    type: Types.GET_REQUEST,
    payload: data,
  }),
  getUsersSuccess: (data) => ({
    type: Types.GET_SUCCESS,
    payload: data,
  }),
  getUsersFailure: () => ({
    type: Types.GET_FAILURE,
  }),
  setCurrentUser: (data) => ({
    type: Types.SET_CURRENT_USER,
    payload: data,
  }),
};
