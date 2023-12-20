<template>
  <form @submit.prevent="submit">
    <h2 class="form-title">Регистрация</h2>
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
    <div class="form-control">
      <label class="form__label" for="password-again">Повторите пароль</label>
      <input
        v-model="passwordAgain"
        class="form__input"
        type="password"
        id="password-again"
        placeholder="Повторите пароль"
      />
      <small v-if="passwordAgainError" class="form__input-error">{{
        passwordAgainError
      }}</small>
    </div>
    <button class="form__btn">Регистрация</button>
  </form>
</template>

<script setup>
import { ref } from "vue"
import { validateAuth } from "@/helpers/validateAuth"
import { createUser } from "@/helpers/localStorage"
import store from "@/store"

const emit = defineEmits(["register"])

const login = ref("")
const password = ref("")
const passwordAgain = ref("")

const loginError = ref("")
const passwordError = ref("")
const passwordAgainError = ref("")

function submit() {
  const [loginE, passwordE] = validateAuth(login.value, password.value)
  loginError.value = loginE
  passwordError.value = passwordE

  if (password.value !== passwordAgain.value)
    passwordAgainError.value = "Пароли должны совпадать"

  if (!loginError.value && !passwordError.value && !passwordAgainError.value) {
    const user = {
      login: login.value,
      password: password.value,
      logged: true,
      role: "user",
    }
    createUser(user)
    store.commit("setUser", user)
    emit("close")
    login.value = ""
    password.value = ""
    passwordAgain.value = ""
  }
}
</script>
