import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase";

export async function saveDecision(question, answer) {
  const user = auth.currentUser;

  if (!user) throw new Error("Please login first.");
  if (!question || !answer) throw new Error("Question and answer are required.");

  await addDoc(collection(db, "decisions"), {
    uid: user.uid,
    email: user.email,
    question,
    answer,
    saved: true,
    createdAt: serverTimestamp(),
  });
}

export async function getUserDecisions() {
  const user = auth.currentUser;

  if (!user) throw new Error("Please login first.");

  const q = query(
    collection(db, "decisions"),
    where("uid", "==", user.uid),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}