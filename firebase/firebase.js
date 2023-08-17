import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getCountFromServer,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// init the services

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

// get the products count
const getCount = async (collection) => {
  const snapshot = await getCountFromServer(collection);
  return snapshot.data().count;
};

// get the all products
const getAllProducts = async (setLastVisible, queryRef) => {
  const res = await getDocs(queryRef);
  setLastVisible(res.docs[res.docs.length - 1]);

  return res.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

const getProductsByCategory = async (colRef, categories, setLastVisible) => {
  // to ensure that every array element in lowercase
  try {
    const lowerCategories = categories.map((category) =>
      category.toLowerCase()
    );

    const q = query(
      colRef,
      where("category", "in", lowerCategories),
      where("colors", "array-contains-any", ["#000000"]),
      limit(10)
    );
    const res = await getDocs(q);
    setLastVisible(res.docs[res.docs.length - 1]);

    // get all the products

    const products = res.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    return products;
  } catch (error) {
    console.log(error);
  }
};

const ConvertTimeToString = (timeStamp) => {
  if (!timeStamp) return;
  const seconds = timeStamp.seconds;
  const milliseconds = seconds * 1000;
  const createdAtDate = new Date(milliseconds);
  const timeString = createdAtDate.toISOString();

  return timeString;
};

export {
  db,
  auth,
  storage,
  app,
  getAllProducts,
  getCount,
  getProductsByCategory,
  ConvertTimeToString,
};
