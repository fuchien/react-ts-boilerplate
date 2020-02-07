import { action } from 'typesafe-actions';
import { AuthTypes } from './types';

export const signInRequest = () => action(AuthTypes.SIGN_IN_REQUEST);
export const signInSuccess = () => action(AuthTypes.SIGN_IN_SUCCESS);
export const signInFailure = () => action(AuthTypes.SIGN_IN_FAILURE);
export const signOut = () => action(AuthTypes.SIGN_OUT);
