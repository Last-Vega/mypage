<template>
  <section id="contact" class="section">
    <div class="container has-text-centered">
      <h2 class="title is-2">Contact</h2>
      <separator color="black"></separator>
      <h5 class="subtitle reveal is-5">
        305-0821 茨城県つくば市春日1-2 筑波大学 春日エリア 情報メディアユニオン棟3F u305室<br />
        Room u305, Media Union, Kasuga 1-2, Tsukuba, Ibaraki 305-8550, Japan <br />
        E-mail1: watanabe.shingo.ss [at] alumni.tsukuba.ac.jp<br />
        E-mail2: shingo.watanabe.2021b [at] mlab.info<br />
      </h5>
      <div class="block reveal">
        <a class="button grow is-dark"
          :href="`mailto:${email}`">
            <span>Ping me | メールを送る</span>
            <b-icon icon="terminal" size="is-small" />
        </a>
      </div>
      <div class="columns is-full">
        <div class="column">
          <a class="icon"
            v-for="item in social"
            :href="item.link"
            :key="item.id"
            target="_blank"
            rel="noopener">
            <div v-html="item.icon" class="is-large" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      email: 'watanabe.shingo.ss@alumni.tsukuba.ac.jp',
      social: [
        {
          icon: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" />',
          link: 'https://www.instagram.com/watsydney/',
        },
        {
          icon: '<img src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png" />',
          link: 'https://github.com/Last-Vega',
        },
      ],
    };
  },
  mounted() {
    sr.reveal('#contact .reveal', 250);
  },
};
</script>

<style lang="scss" scoped>
.icon {
    padding: 0.5em;
    margin: 0 auto;
    // max-width: 200%;
    // opacity: 0.6;
    width: 60px;
    transition: all 0.15s ease-in;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      cursor: pointer
    }
  }
</style>
