import { useState } from 'react';
import firebase from '../firebase/config';
import 'firebase/firestore';

const useFirestoreAdd = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState(null);

  const addDocument = async (documentData, collectionName) => {
    setIsAdding(true);
    setError(null);

    try {
      const collectionRef = firebase.firestore().collection(collectionName);
      await collectionRef.add(documentData);

      setIsAdding(false);
    } catch (error) {
      setIsAdding(false);
      setError(error);
    }
  };

  return [addDocument, isAdding, error];
};

export default useFirestoreAdd;
