<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Todo List</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <form @submit.prevent="submitTodo">
          <ion-item>
            <ion-input
              label=""
              type="text"
              placeholder="What do you need to do?"
              v-model="todoText"
            ></ion-input>
            <ion-button type="submit">Add</ion-button>
          </ion-item>
        </form>
        <ion-grid>
          <ion-item v-for="todo in todos" :key="todo.id">
            <ion-checkbox
              slot="start"
              :checked="todo.completed"
              @click="updateTodo(todo.id, { completed: !todo.completed })"
            ></ion-checkbox>
            <p
              :style="{
                textDecoration: todo.completed ? 'line-through' : 'none',
                paddingLeft: '10px',
              }"
            >
              {{ todo.description }}
            </p>
            <span v-if="todo.completed"
              ><ion-icon
                :icon="trashBin"
                class="bin-icon"
                @click="deleteTodo(todo.id)"
              ></ion-icon
            ></span>
          </ion-item>
        </ion-grid>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonItemSliding,
  IonIcon,
  IonCheckbox,
  IonListHeader,
  IonInput,
  IonButton,
  IonRow,
  IonGrid,
} from "@ionic/vue";
import { trashBin } from "ionicons/icons";
import { useCollection, useFirestore } from "vuefire";
import { collection } from "firebase/firestore";
import { doc, setDoc, addDoc, deleteDoc } from "firebase/firestore";
import { ref } from "vue";

const todoText = ref("");

const db = useFirestore();
const todos = useCollection(collection(db, "todos"));

const submitTodo = async () => {
  await addDoc(collection(db, "todos"), {
    description: todoText.value,
    createdAt: new Date(),
    completed: false,
  });
  todoText.value = "";
};

const updateTodo = async (id: string, obj: any) => {
  await setDoc(doc(db, "todos", id), obj, { merge: true });
};

const deleteTodo = async (id: string) => {
  await deleteDoc(doc(db, "todos", id));
};
</script>

<style scoped>
#sliding-item {
  --background: transparent;
  display: flex;
  align-items: center;
}

.bin-icon {
  color: red;
  padding-left: 10px;
}
</style>