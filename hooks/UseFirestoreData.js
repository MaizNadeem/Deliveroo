import { useEffect, useState, useMemo } from 'react';
import firebase from '../firebase/config'; // Adjust the path to your Firebase configuration file

const useFirebaseData = (collection) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firebase.firestore().collection(collection).get();
        const documents = snapshot.docs.map((doc) => doc.data());
        setData(documents);
      } catch (error) {
        console.log('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, [collection]);

  return useMemo(() => data, [data]);
};

export default useFirebaseData;
