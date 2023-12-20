<template>
  <ul class="comment__list list-reset">
    <CommentItem
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </ul>
</template>

<script setup>
import CommentItem from "./CommentItem.vue"

defineProps({
  comments: {
    type: Array,
  },
})
</script>
