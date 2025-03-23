import admin from "firebase-admin";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        type: process.env.FIREBASE_TYPE,
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY,
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
      }),
    });
    console.log("✅ Firebase Initialized Successfully!");
  } catch (error) {
    console.error("🔥 Firebase Initialization Error:", error);
  }
} else {
  console.log("⚡ Firebase Already Initialized!");
}

console.log("Firebase Apps:", admin.apps);

export const db = admin.firestore();
