<template>
  <div class="post">
    <h2 class="post__post-title">{{ post.title }}</h2>
    <p class="post__post-text">{{ post.text }}</p>
  </div>

  <h2 v-if="post.comments?.length" class="comment__title">Комментарии</h2>
  <h2 v-else class="comment__title">Комментарии отсутствуют</h2>

  <CommentAdd v-if="roleAccess" />

  <template v-if="post.comments?.length">
    <CommentList :comments="post.comments" />
  </template>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"
import CommentList from "@/components/Comment/CommentList.vue"
import CommentAdd from "@/components/Comment/CommentAdd.vue"

const route = useRoute()
const store = useStore()

const post = computed(() => store.getters.getPost ?? {})

const roleAccess = computed(
  () =>
    store.getters.getUser?.role === "admin" ||
    store.getters.getUser?.role === "user"
)

onMounted(() => {
  store.commit("setPost", +route.params.id)
})

onUnmounted(() => {
  store.commit("clearPost")
})
</script>
