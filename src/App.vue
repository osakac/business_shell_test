<template>
  <TheHeader />

  <div class="main">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import TheHeader from "@/components/TheHeader.vue"
import { getUser } from "@/helpers/localStorage"
import { useStore } from "vuex"

const store = useStore()

onMounted(() => {
  if (!localStorage.getItem("users"))
    localStorage.setItem(
      "users",
      JSON.stringify([
        { login: "admin", password: "admin", logged: false, role: "admin" },
      ])
    )

  const user = getUser()
  if (user) store.commit("setUser", user)
})
</script>
