<template>
  <ul class="post__list list-reset">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </ul>
</template>

<script setup>
import PostItem from "@/components/Post/PostItem.vue"

defineProps({
  posts: {
    type: Array,
  },
})
</script>
