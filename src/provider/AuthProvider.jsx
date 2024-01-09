import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)
  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logoutUser=()=>{
    return signOut(auth)
    .then(()=>console.log('logout'))
    .catch(error=>console.log(error))
  }
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
       setUser(currentUser)
    })
    return ()=>{
        unsubscribe()
    }
  }, []);

  const authInfo = {
    createUser,
    user,
    loginUser,
    logoutUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
