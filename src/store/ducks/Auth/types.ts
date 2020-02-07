/**
 * Action types
 */
export const AuthTypes = {
  SIGN_IN_REQUEST: 'authentication/SIGN_IN_REQUEST',
  SIGN_UP_REQUEST: 'authentication/SIGN_UP_REQUEST',
  SIGN_IN_SUCCESS: 'authentication/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'authentication/SIGN_IN_FAILURE',
  SIGN_OUT: 'authentication/SIGN_OUT',
};

/**
 * Data types
 */
export interface AuthUser {
    fullName: string;
    email: string;
    employeeId: string;
    sponsorId: string;
    userId: string;
}
/**
 * State type
 */
export interface AuthState {
    readonly session: boolean;
    readonly signed: boolean;
    readonly loading: boolean;
    readonly user: AuthUser;
}
