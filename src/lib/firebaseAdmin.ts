import admin from "firebase-admin";

// Ensure that required environment variables exist
if (
  !process.env.FIREBASE_PROJECT_ID ||
  !process.env.FIREBASE_PRIVATE_KEY ||
  !process.env.FIREBASE_CLIENT_EMAIL
) {
  throw new Error("Missing one or more Firebase environment variables.");
}

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
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
