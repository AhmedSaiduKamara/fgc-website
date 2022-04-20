import { useState } from "react";
// import firebase methods
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    setError(null);

    // pass the auth object, then the email and password. this function takes 3 args
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "SIGNUP", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, signup };
};

export default useSignUp;
