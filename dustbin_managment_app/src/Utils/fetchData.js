import {
  getDatabase,
  ref,
  query,
  orderByChild,
  onValue,
} from "firebase/database";
import { db } from "../firebase";

export const getAllDustbins = async (firebaseDb) => {
  const dustbins = await onValue(ref(db), "smartbin");

  console.log(dustbins);
};
