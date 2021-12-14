<template>
  <section id="about" class="section">
    <div class="container">
      <div class="image avatar">
        <img src="../assets/img/me_rounded.jpeg">
      </div>
      <h2 class="title is-2 has-text-centered">About Me</h2>
      <separator></separator>
      <div class="about-text block">
        My name is Shingo Watanabe. I'm a Bachelor's student at the College of Knowledge and Library Sciences in the School of Informatics, at <a href="https://www.tsukuba.ac.jp/">University of Tsukuba</a>. My major is information science and systems. I am conducting my research with a data science approach. Now, I am a member of <a href="https://fusioncomplab.org">fusioncomp lab</a> which mainly studying human computation or crowdsourcing, and I am particularly interested in human-AI collaboration in the information management. Since human-in-the-loop approach is effective way to solve the difficult problem which AI can not solve alone. By develop and utilizing the human-AI collaboration system, I firmly believe that our real world will be getting better and useful. In my research, I am developing a document management system which is based on human-in-the-loop latent space learning. The idea of this system is acquiring user's criterion of document management by human-in-the-loop. If our system can be effective, the user need not worry about taking up his or her time to manage document. I have a passion for developing the system which makes our real world better. Therefore, I will continue my studies in the field of information science in terms of human-AI collaboration system where I am researching.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {};
  },
  mounted() {
    sr.reveal('#about .block', 200);
  },
};
</script>

<style lang="scss" scoped>
  @import '~vars';

  .avatar {
    height: 200px;
    width: 200px;
    margin: 1rem auto;

    img {
      user-select: none;
      pointer-events: none;
      border-radius: 200px;
      border: 3px solid $secondary;
    }
  }

  .about-text {
    max-width: $tablet;
    margin: auto;
  }
</style>
