<template>
  <v-app>
    <v-main>
      <Nav />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Nav from './components/Nav.vue'


export default {
  name: 'App',
  components: {
    Nav
  },
  data: () => ({
  })
}
</script>
