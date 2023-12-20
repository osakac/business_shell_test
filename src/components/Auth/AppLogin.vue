<template>
  <form @submit.prevent="submit">
    <h2 class="form-title">Войти</h2>
    <div class="form-control">
      <label class="form__label" for="login">Логин</label>
      <input
        v-model="login"
        class="form__input"
        type="text"
        id="login"
        placeholder="Логин"
      />
      <small v-if="loginError" class="form__input-error">{{
        loginError
      }}</small>
    </div>
    <div class="form-control">
      <label class="form__label" for="password">Пароль</label>
      <input
        v-model="password"
        class="form__input"
        type="password"
        id="password"
        placeholder="Пароль"
      />
      <small v-if="passwordError" class="form__input-error">{{
        passwordError
      }}</small>
    </div>
    <button class="form__btn">Войти</button>
    <small v-if="infoError" class="form__input-error">{{ infoError }}</small>
  </form>
</template>

<script setup>
import { ref } from "vue"
import { loginUser } from "@/helpers/localStorage"
import { validateAuth } from "@/helpers/validateAuth"
import store from "@/store"

const emit = defineEmits(["register"])

const login = ref("")
const loginError = ref("")
const password = ref("")
const passwordError = ref("")
const infoError = ref("")

function submit() {
  const [loginE, passwordE] = validateAuth(login.value, password.value)
  loginError.value = loginE
  passwordError.value = passwordE

  if (!loginError.value && !passwordError.value) {
    try {
      const user = loginUser(login.value, password.value)
      store.commit("setUser", user)
      emit("close")
    } catch (e) {
      infoError.value = e
    }
  }
}
</script>
