import { auth } from "./firebase";

//sign up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

//sign in
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

//sign out
export const doSignOut = () => auth.signOut();

//## below are two more functions, for resetting or changing passwords ##

//password reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

//password change
export const doPasswordChange = password =>
  auth.currentUser.updatePassword(password);
