/* ============================================================
   FIREBASE CONFIG — paste your values from the Firebase console
   (Project settings > Your apps > Web app > firebaseConfig).
   This config is NOT secret. Security comes from firestore.rules.
   ============================================================ */
export const firebaseConfig = {
  apiKey: "AIzaSyBGjrdI88EtUcRTjrqNBLlUbvGjg-qeTwI",
  authDomain: "loyality-a47e2.firebaseapp.com",
  projectId: "loyality-a47e2",
  storageBucket: "loyality-a47e2.firebasestorage.app",
  messagingSenderId: "744164041321",
  appId: "1:744164041321:web:e0b2e50971a4f5146b78f8"
};

/* ============================================================
   STORE SETTINGS — one deployment = one store for now.
   The cashier page saves these to the database on login, so the
   customer card shows the right reward automatically.
   ============================================================ */
export const STORE = {
  id: "fruity-bros",          // letters, numbers, hyphens only. Do not change later.
  name: "Fruity Bros",
  takaPerPoint: 10,           // 1 point per ৳10 spent
  rewardCost: 500,            // points needed for the reward
  rewardName: "Free coffee",
  reviewUrl: ""               // paste the store's Google review link here (optional)
};
