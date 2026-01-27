import { createUserWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { db, auth as firebaseAuth } from '../config/firebaseconfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser({ uid: user.uid, email: user.email });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // user sign up
  const signUp = async ({ email, password, username, fullname, phone }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      const u = userCredential.user;
      // store user profile in Firestore
      try {
        await setDoc(doc(db, 'users', u.uid), {
          username: username || '',
          fullname: fullname || '',
          phone: phone || '',
          email: email,
          createdAt: new Date().getTime(),
        });
      } catch (e) {
        Alert.alert("Failed to create user profile", e);
      }
      return { success: true, user: u };

    } catch (error) {
      Alert.alert("error", "unable to create profile at the moments")
      return { success: false, error: error.message };
    }
  };

  //   user login
  const login = async (userData) => {
    setUser(userData);
  };

  //   user logout
  const logout = async () => {
    try {
      await firebaseSignOut(firebaseAuth);
    } catch (e) {
      Alert.alert("Error", "Failed to sign out");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    Alert.alert("Error", "TRY AGAIN LATER");
  }
  return context;
};

export default AuthContext;
