<template>
  <div @click="$emit('close')" class="modal">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>
