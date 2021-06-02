import { db } from "./firebase";

//create an user and store it at users/id path (it's an asynchronous func)
export const doCreateUser = ( id, name, email ) =>
  db.ref(`users/${id}`).set({
    name,
    email
  });

//returns all users from firebase realtime db
export const onceGetUsers = () => db.ref("users").once("value");
export const doGetAnUnser = uid => db.ref(`users/${uid}`).once("value");

