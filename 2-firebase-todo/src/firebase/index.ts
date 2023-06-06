import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { createApp } from "vue";
import { useCollection } from "vuefire";

export const firebaseApp = initializeApp();

export const firestore = getFirestore(firebaseApp);

createApp({
  setup() {
    const todosRef = collection(db, "todos");
    const todos = useCollection(todosRef);
    return { todos };
  },
});
