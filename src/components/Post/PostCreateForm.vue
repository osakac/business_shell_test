<template>
  <form @submit.prevent="submit">
    <h2 class="form-title">Создание поста</h2>
    <div class="form-control">
      <label class="form__label" for="title">Заголовок</label>
      <input
        v-model.trim="title"
        class="form__input"
        type="text"
        id="title"
        placeholder="Заголовок"
      />
    </div>
    <div class="form-control">
      <label class="form__label" for="text">Содержимое</label>
      <textarea
        v-model.trim="text"
        class="form__input textarea"
        type="text"
        id="text"
        rows="4"
        placeholder="Содержимое"
      ></textarea>
    </div>
    <button class="form__btn">Создать</button>
  </form>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"

const emit = defineEmits(["close"])

const store = useStore()

const title = ref("")
const text = ref("")

function submit() {
  const post = {
    id: Date.now(),
    title: title.value,
    text: text.value,
    comments: [],
  }

  store.commit("addPost", post)
  emit("close")
}
</script>

<style scoped>
.textarea {
  resize: none;
}
.textarea::-webkit-scrollbar {
  display: none;
}
</style>
