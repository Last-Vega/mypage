<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="block has-text-centered">
        <h2 class="title is-2">Skills</h2>
        <separator></separator>
        <h5 class="subtitle is-5">Technologies I have used.</h5>
      </div>
      <div class="skills columns is-multiline is-mobile">
        <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop"
          v-for="(skill, index) in skills"
          :key="index">
          <div class="skill">
            <a class="image"
              target="_blank"
              rel="noopener"
              :href="skill.url"
              :title="skill.name">
              <clazy-load :src="skill.image">
                <div v-html="skill.image" />
                <div class="preloader" slot="placeholder" />
              </clazy-load>

            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { VueClazyLoad } from 'vue-clazy-load'

import skills from './skills';

export default {
  name: 'skills',
  data() {
    return {
      skills,
    };
  },
  mounted() {
    sr.reveal('.skill', 50);
  },
  components: {
    VueClazyLoad,
  },
};
</script>

<style lang="scss" scoped>
  @import '~vars';

  .skills {
    max-width: $desktop;
    margin: auto;
  }

  .columns {
    justify-content: center;
  }

  .skill {
    padding: 0.5em;
    margin: 0 auto;
    // max-width: 50%;
    // opacity: 0.8;
    transition: all 0.15s ease-in;
    width: 100px;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      cursor: pointer
    }
  }
</style>
