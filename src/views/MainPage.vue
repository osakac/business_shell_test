<template>
  <h1 class="page-title">Список постов</h1>
  <button
    v-if="roleAccess"
    @click="visibleCreateForm = true"
    class="posts__add-btn"
  >
    Добавить пост
  </button>

  <PostList v-if="posts.length" :posts="posts" />
  <h2 v-else class="posts__empty">Посты отсутствуют</h2>

  <Teleport to="body">
    <TheDialog v-if="visibleCreateForm" @close="visibleCreateForm = false">
      <PostCreateForm @close="visibleCreateForm = false" />
    </TheDialog>
  </Teleport>
</template>

<script setup>
import { computed, ref } from "vue"
import { useStore } from "vuex"
import PostList from "@/components/Post/PostList.vue"
import TheDialog from "@/components/TheDialog.vue"
import PostCreateForm from "@/components/Post/PostCreateForm.vue"

const store = useStore()

const posts = computed(() => store.getters.getPosts)

const roleAccess = computed(() => store.getters.getUser?.role === "admin")

const visibleCreateForm = ref(false)
</script>

<style scoped>
.posts__empty {
  text-align: center;
  color: var(--white);
}
</style>
