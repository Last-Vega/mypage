<template>
  <div id="app" v-cloak>
    <hero></hero>
    <about></about>
    <skills></skills>
    <Carrier />
    <Publications />
    <Grants />
    <projects></projects>
    <contact></contact>
    <copyright></copyright>
  </div>
</template>

<script>
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import Publications from './components/Publications';
import Carrier from './components/Carrier.vue';
import Grants from './components/Grants.vue';

export default {
  name: 'app',
  components: {
    Hero,
    About,
    Projects,
    Skills,
    Contact,
    Copyright,
    Publications,
    Carrier,
    Grants
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
