import auth from '@react-native-firebase/auth';

export const login = async (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const createAccount = async (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

// export const subscribeAuth = async (callback: (user: AccountInformation) => void) => {
//   return auth().onAuthStateChanged(callback);
// };

export const logout = async () => {
  return auth().signOut();
};
