<template>
  <div class="comment__add">
    <button @click="visibleComment = !visibleComment" class="comment__add-btn">
      <svg
        class="comment__add-svg"
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="14"
        viewBox="0 0 448 512"
      >
        <path
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
        />
      </svg>
      Добавить комментарий
    </button>
    <template v-if="visibleComment">
      <textarea
        v-model="textComment"
        class="comment__add-textarea"
        rows="3"
        placeholder="Текст комментария..."
      ></textarea>
      <button @click="createPost" class="comment__create-btn">Отправить</button>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"

const store = useStore()

const visibleComment = ref(false)
const textComment = ref("")

function createPost() {
  const comment = {
    author: store.getters.getUser.login,
    text: textComment.value,
  }
  store.commit("addComment", comment)
  visibleComment.value = false
  textComment.value = ""
}
</script>
