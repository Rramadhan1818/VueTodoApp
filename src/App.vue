<template>
  <div id="app">
      <h2>{{ title }}</h2>
      <ul>
        <li v-for="todo in todos">
          {{ todo.title }}
        </li>
      </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default { 
  name: 'App',
  computed: {
    ...mapState(['title', 'todos'])
  },
  components: {

  }
}
</script>

<style>
</style>
