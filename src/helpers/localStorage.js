export function createUser(user) {
  if (localStorage.getItem("users")) {
    const users = JSON.parse(localStorage.getItem("users"))
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
  } else localStorage.setItem("users", JSON.stringify([user]))
}

export function getUser() {
  const users = JSON.parse(localStorage.getItem("users"))

  return users ? users.find((u) => u.logged) : null
}

export function loginUser(login, password) {
  const users = JSON.parse(localStorage.getItem("users"))

  if (users) {
    const neededUser = users.find(
      (u) => u.login === login && u.password === password
    )
    if (!neededUser) throw "Пользователя не существует"
    neededUser.logged = true
    localStorage.setItem("users", JSON.stringify(users))
    return neededUser
  }

  userLogged.logged = true
  localStorage.setItem("user", JSON.stringify(userLogged))
}

export function logoutUser(user) {
  const users = JSON.parse(localStorage.getItem("users"))
  const loggedUser = (users.find((u) => u.login === user.login).logged = false)
  localStorage.setItem("users", JSON.stringify(users))
}
