<template>
  <section id="carrier" class="section no-h-padding">
    <div class="block has-text-centered">
      <h2 class="title is-2">職務経歴 / Carrier</h2>
      <separator></separator>
    </div>
    <div class="cardContainer">
      <b class="carrierInfo">インターンシップ / Internship</b>
      <ol class="content">
        <li>
          日本総研: 2020.2 3 days ハッカソン
        </li>
        <li>
          楽天: 2020.8 2 weeks ハッカソン
        </li>
        <li>
          ナイル株式会社: 2021.3~10 長期インターン　フロントエンドエンジニア
        </li>
      </ol>
    </div>
    <hr />
    <div class="cardContainer">
      <b class="carrierInfo">ティーチングアシスタント / Teaching Assistant</b>
      <ol class="content">
        <li>
          線形代数A: 2022.5~8 筑波大学 情報学群 知識情報・図書館学類
        </li>
      </ol>
    </div>
    <hr />
    <div class="cardContainer">
      <b class="carrierInfo">リサーチアシスタント / Research Assistant</b>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@import '~vars';
@import '~bulma/sass/utilities/mixins';

.carrierInfo {
  font-size: 2rem;
}

.content {
  padding-left: 2em;
}

</style>
