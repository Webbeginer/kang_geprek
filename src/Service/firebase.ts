import app from "./init";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebase= getFirestore(app)

export async function retriveData( collectionName: string ) {
    const snapshot= await getDocs(collection(firebase, collectionName));
    const data= snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data
}