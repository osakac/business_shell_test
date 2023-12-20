export function validateAuth(login, password) {
  const error = {
    login: null,
    password: null,
  }

  if (login.length < 5) {
    error.login = "Логин должен быть не менее 5 символов"
  }
  if (password.length < 5) {
    error.password = "Пароль должен быть не менее 5 символов"
  }

  return [error.login, error.password]
}
