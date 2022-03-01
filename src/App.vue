<template>
  <div id="app" v-cloak>
    <hero></hero>
    <about></about>
    <!-- <do></do> -->
    <skills></skills>
    <!-- <fork></fork> -->
    <Publications />
    <Timeline />
    <projects></projects>
    <contact></contact>
    <copyright></copyright>
  </div>
</template>

<script>
import Hero from './components/Hero';
import About from './components/About';
// import Do from './components/Do';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import Fork from './components/Fork';
import Copyright from './components/Copyright';
import Timeline from './components/Timeline';
import Publications from './components/Publications';

export default {
  name: 'app',
  components: {
    Hero,
    About,
    // Do,
    Projects,
    Skills,
    // Fork,
    Contact,
    Copyright,
    Timeline,
    Publications
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
