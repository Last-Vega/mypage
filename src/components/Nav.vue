<template>
  <v-app>
    <v-container>
      <v-row justify="center" align-content="center">
        <v-btn v-on:click="changeLanguageJa">
          日本語
        </v-btn>
        <v-btn v-on:click="changeLanguageEn">
          English
        </v-btn>
      </v-row>
    </v-container>
      <div v-if="this.status == 1">
        <myPageJa />
      </div>
      <div v-else-if="this.status != 1">
        <myPageEn />
      </div>
      <a class="microtask repeat" href="//crowd4u.org">
        <img src="//crowd4u.org/img/crowd4u_banner364x93.png">
      </a>
  </v-app>
</template>

<script>
import myPageEn from './myPageEn.vue'
import myPageJa from './myPageJa.vue'

// const src = '//crowd4u.org/script/task_loader.js?requester=2143&length=10'

export default {
  name: 'Nav',
  components: {
    myPageEn,
    myPageJa
  },
  data: () => ({
    status: 1
  }),
  methods: {
    changeLanguageJa () {
      this.status = 1
    },
    changeLanguageEn () {
      this.status = -1
    }
  }
}
</script>
