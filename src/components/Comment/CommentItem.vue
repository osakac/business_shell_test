<template>
  <li class="comment__item">
    <h3 class="comment__author">{{ comment.author }}</h3>
    <p class="comment__text">{{ comment.text }}</p>
  </li>
</template>

<script setup>
defineProps({
  comment: {
    type: Object,
  },
})
</script>
