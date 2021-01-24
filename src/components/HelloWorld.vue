<template>
  <v-container>
    <v-row
      justify="center" align-content="center"
    >
      <v-card>
        <v-card-title>
          About Me
        </v-card-title>
        <v-avatar
          color="primary"
          size="300"
        >
        <img
          src="../images/image2.png"
          alt="John"
        >
        </v-avatar>
        <v-card-text>
          I am a student at university of Tsukuba. <br />
          My major is computer science, and I am particularly interested in machine learning and web development. <br />
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({

  })
}
</script>
