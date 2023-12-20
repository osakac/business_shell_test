import { createStore } from "vuex"
import database from "./database"

export default createStore({
  state: {
    posts: database,
    post: null,
    user: null,
  },
  getters: {
    getPosts(state) {
      return state.posts
    },
    getPost(state) {
      return state.post
    },
    getUser(state) {
      return state.user
    },
  },
  mutations: {
    setPost(state, postId) {
      const post = state.posts.find((p) => p.id === postId)
      state.post = post
    },
    clearPost(state) {
      state.post = null
    },
    setUser(state, user) {
      state.user = user
    },
    addComment(state, comment) {
      state.post.comments.unshift(comment)
    },
    logout(state) {
      state.user = null
    },
    addPost(state, post) {
      state.posts.unshift(post)
    },
  },
  actions: {},
  modules: {},
})
