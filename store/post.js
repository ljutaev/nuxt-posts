import INITIAL_DATA from './initial_data.json'

import Vue from 'vue'

export const state = () => {
	return {
		items: [],
		archivedItems: [],
		item: {}
	}
}

// Getters are like computed properties but for Vuex
export const getters = {
  hasEmptyItems(state) {
    return state.items.length === 0
  }
}

// Very good spot to send a request to a server. Usualy Actions resolve into some data
export const actions = {
	fetchPosts({commit}) {
		return this.$axios.$get('/api/posts')
			.then((posts) => {
				commit('setPosts', posts)
				return posts
			})
	},
	fetchPostById({commit}, postId) {
    return this.$axios.$get('/api/posts')
      .then((posts) => {
        const selectedPost = posts.find((p) => p._id === postId)
        commit('setPost', selectedPost)
        return selectedPost
      })
  },
}

// Mutations are simple functions that have access to a state.
// Mutations are used to assign values to a state
export const mutations = {
	setPosts(state, posts) {
		state.items = posts
	},
	setPost(state, post) {
    state.item = post
  },
}