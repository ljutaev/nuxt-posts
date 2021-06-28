<template>
  <div>
    <Navbar />
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>Newest Posts</h1>
                  <hr>
                </div>
                <div v-if="posts && posts.length > 0">
                  <post-item
                    v-for="post in posts"
                    :key="post._id"
                    :title="post.title"
                    :subtitle="post.subtitle"
                    :date="post.createdAt"
                    :isRead="post.isRead"
                    :id="post._id"
                  />
                </div>
                <div v-else>
                  No Posts :(
                </div>
              </div>
              <!-- end of post -->
            </div>
            <!-- end of side bar -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import PostItem from '~/components/PostItem'

export default {
  components: {
    Navbar,
    PostItem
  },
  data() {
    return {
      title: 'My Title From Page',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  fetch({store}) {
    if (store.getters['post/hasEmptyItems']) {
      return store.dispatch('post/fetchPosts')
    }
  },
  mounted() {

  },
  computed: {
    posts() {
      return this.$store.state.post.items
    },
  },
}
</script>

<style>

</style>
