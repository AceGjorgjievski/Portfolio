/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  CollectionReference,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import { db } from "@/firestore";


const getCollectionRef = (collectionName: string): CollectionReference<DocumentData> => {
  return collection(db, collectionName);
};

const getDocRef = (collectionName: string, docId: string): DocumentReference<DocumentData> => {
  return doc(db, collectionName, docId);
};

export const getAllDocs = async (collectionName: string) => {
  const snapshot = await getDocs(getCollectionRef(collectionName));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getDocById = async (collectionName: string, docId: string) => {
  const docSnap = await getDoc(getDocRef(collectionName, docId));
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const createDoc = async (collectionName: string, data: any) => {
  const docRef = await addDoc(getCollectionRef(collectionName), data);
  return docRef.id;
};

export const setDocById = async (collectionName: string, docId: string, data: any) => {
  await setDoc(getDocRef(collectionName, docId), data);
};

export const updateDocById = async (collectionName: string, docId: string, data: any) => {
  await updateDoc(getDocRef(collectionName, docId), data);
};

export const deleteDocById = async (collectionName: string, docId: string) => {
  await deleteDoc(getDocRef(collectionName, docId));
};
