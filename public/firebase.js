/* Shared Firebase setup used by index.html (customer) and cashier.html. */
import { firebaseConfig, STORE } from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore, doc, getDoc, setDoc, deleteDoc, onSnapshot, collection,
  query, orderBy, where, limit, runTransaction
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

export const isConfigured = !String(firebaseConfig.apiKey).startsWith("PASTE");
const app = isConfigured ? initializeApp(firebaseConfig) : null;
export const db = app ? getFirestore(app) : null;
export const auth = app ? getAuth(app) : null;

export {
  STORE, doc, getDoc, setDoc, deleteDoc, onSnapshot, collection, query,
  orderBy, where, limit, runTransaction,
  onAuthStateChanged, signInWithEmailAndPassword, signOut
};
