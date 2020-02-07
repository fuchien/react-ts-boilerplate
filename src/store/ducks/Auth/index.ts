import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  session: false,
  signed: false,
  loading: false,
  user: {
    fullName: '',
    email: '',
    employeeId: '',
    sponsorId: '',
    userId: '',
  },
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        signed: false,
        session: action.payload.data.bearerToken,
        user: { ...action.payload.data.profiles[0] },
      };
    case AuthTypes.SIGN_OUT:
      return {
        ...state,
        loading: false,
        session: false,
        user: null,
        signed: false,
      };
    case AuthTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
