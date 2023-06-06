import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { createApp } from "vue";
import { useCollection } from "vuefire";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDokmawDDLm3OITrekZh0YdG8qGrYWLfx8",
  authDomain: "ionic-firebase-chat-59ba3.firebaseapp.com",
  projectId: "ionic-firebase-chat-59ba3",
  storageBucket: "ionic-firebase-chat-59ba3.appspot.com",
  messagingSenderId: "806201131469",
  appId: "1:806201131469:web:ed03fd7e94d485ee734484",
});

export const firestore = getFirestore(firebaseApp);

createApp({
  setup() {
    const todosRef = collection(db, "todos");
    const todos = useCollection(todosRef);
    return { todos };
  },
});
