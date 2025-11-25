import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const ref = collection(db, "shopping-list-items");

async function addItem(userId, item) {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
}

async function getItems(userId) {
    const itemsRef = collection(db, "users", userId, "items");
    const docsnapshot = await getDocs(itemsRef);
    return docsnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export { getItems, addItem };