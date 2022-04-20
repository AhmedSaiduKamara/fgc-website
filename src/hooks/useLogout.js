import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return { error, logout };
};

export default useLogout;
