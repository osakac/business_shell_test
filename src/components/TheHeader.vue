<template>
  <header class="header">
    <ul class="header__auth list-reset">
      <template v-if="roleAccess">
        <li class="header__auth-item">
          <button class="header__auth-btn">
            {{ $store.getters.getUser.login }}
          </button>
        </li>
        <li class="header__auth-item">
          <button @click="logout" class="header__auth-btn">Выйти</button>
        </li>
      </template>
      <template v-else>
        <li class="header__auth-item">
          <button @click="openLogin" class="header__auth-btn">Войти</button>
        </li>
        <li class="header__auth-item">
          <button @click="openRegister" class="header__auth-btn">
            Регистрация
          </button>
        </li>
      </template>
    </ul>
  </header>

  <Teleport to="body">
    <TheDialog v-if="visible" @close="visible = false">
      <component :is="openedDialog" @close="visible = false" />
    </TheDialog>
  </Teleport>
</template>

<script setup>
import { computed, ref, shallowRef } from "vue"
import { useStore } from "vuex"
import TheDialog from "@/components/TheDialog.vue"
import AppLogin from "@/components/Auth/AppLogin.vue"
import AppRegister from "@/components/Auth/AppRegister.vue"
import { logoutUser } from "@/helpers/localStorage"

const store = useStore()

const visible = ref(false)

const roleAccess = computed(
  () =>
    store.getters.getUser?.role === "admin" ||
    store.getters.getUser?.role === "user"
)

const choosedDialog = shallowRef(null)

const components = [AppLogin, AppRegister]

const openedDialog = computed(() => choosedDialog.value)

function openLogin() {
  choosedDialog.value = components[0]
  visible.value = true
}

function openRegister() {
  choosedDialog.value = components[1]
  visible.value = true
}

function logout() {
  logoutUser(store.getters.getUser)
  store.commit("logout")
}
</script>
