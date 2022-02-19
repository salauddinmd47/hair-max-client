import initializeAuthentication from "../componets/Login/initializeAuthentication";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  getAuth 
} from "firebase/auth"; 
 
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = (location, history) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        const destination = location.state.from || "/";
        history.push(destination);
        console.log(user);
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  const logOut = ()=>{
    signOut(auth).then(() => {
        
      }).catch((error) => {
        // An error happened.
      })
      .finally(() => setLoading(false));;
  }
  useEffect(() => {
     onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setLoading(false);
      }
    });
     
  }, []);

  return { googleSignIn, user,logOut,loading };
};
export default useFirebase;
