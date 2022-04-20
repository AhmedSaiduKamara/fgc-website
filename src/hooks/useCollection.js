import { useState, useEffect } from "react";
// firebase imports
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export const useCollection = (coll) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const ref = collection(db, coll);

    const unsub = onSnapshot(ref, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });
    return () => unsub();
  }, [coll]);

  return { documents };
};

export default useCollection;
