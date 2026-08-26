// ============================================
// FIREBASE SERVICES
// ============================================

import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { db, auth, isFirebaseConfigured } from './config';

// ── Contact Form ──
export const submitContactMessage = async (data) => {
  if (!isFirebaseConfigured || !db) {
    throw new Error('Firebase is not configured. Please set up your environment variables.');
  }

  try {
    const docRef = await addDoc(collection(db, 'contactMessages'), {
      ...data,
      createdAt: serverTimestamp(),
      read: false,
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact message:', error);
    throw error;
  }
};

// ── Admin Auth ──
export const adminLogin = async (email, password) => {
  if (!isFirebaseConfigured || !auth) {
    throw new Error('Firebase is not configured.');
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const adminLogout = async () => {
  if (!auth) return;
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

// ── Generic CRUD ──
export const getCollection = async (collectionName) => {
  if (!isFirebaseConfigured || !db) return [];

  try {
    const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Error fetching ${collectionName}:`, error);
    return [];
  }
};

export const addDocument = async (collectionName, data) => {
  if (!isFirebaseConfigured || !db) {
    throw new Error('Firebase is not configured.');
  }

  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error(`Error adding to ${collectionName}:`, error);
    throw error;
  }
};

export const updateDocument = async (collectionName, docId, data) => {
  if (!isFirebaseConfigured || !db) {
    throw new Error('Firebase is not configured.');
  }

  try {
    await updateDoc(doc(db, collectionName, docId), data);
    return { success: true };
  } catch (error) {
    console.error(`Error updating ${collectionName}/${docId}:`, error);
    throw error;
  }
};

export const deleteDocument = async (collectionName, docId) => {
  if (!isFirebaseConfigured || !db) {
    throw new Error('Firebase is not configured.');
  }

  try {
    await deleteDoc(doc(db, collectionName, docId));
    return { success: true };
  } catch (error) {
    console.error(`Error deleting ${collectionName}/${docId}:`, error);
    throw error;
  }
};
