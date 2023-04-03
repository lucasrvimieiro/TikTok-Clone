import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyDB5kkBIJEkm-gI8L31MKzkTWL-LKN0E8I",
	authDomain: "tiktok---jornada-e2b0a.firebaseapp.com",
	projectId: "tiktok---jornada-e2b0a",
	storageBucket: "tiktok---jornada-e2b0a.appspot.com",
	messagingSenderId: "420435455426",
	appId: "1:420435455426:web:ccde9c122dc9c9cb6afa5b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;