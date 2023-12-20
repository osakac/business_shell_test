<template>
  <li class="post__item">
    <h2 class="post__title">{{ post.title }}</h2>
    <p class="post__text">{{ post.text }}</p>
    <router-link
      :to="{ name: 'post', params: { id: post.id } }"
      class="post__btn"
      >Открыть</router-link
    >
  </li>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
  },
})
</script>
