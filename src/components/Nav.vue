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
  </v-app>
</template>

<script>
import myPageEn from './myPageEn.vue'
import myPageJa from './myPageJa.vue'

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
