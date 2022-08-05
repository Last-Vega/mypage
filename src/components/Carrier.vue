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
        <li>
          DMM株式会社: 2022.9 2 weeks　機械学習エンジニア
        </li>
        <li>
          株式会社リクルート: 2022.10~11 長期インターン　データスペシャリスト
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
        <li>
          プログラミング入門A: 2022.10~12 筑波大学 情報学群 知識情報・図書館学類
        </li>
        <li>
          データベース技術: 2022.10~12 筑波大学 情報学群 知識情報・図書館学類
        </li>
        <!-- <li>
          データ構造とアルゴリズム: 2022.10~12 筑波大学 情報学群 知識情報・図書館学類
        </li> -->
        <li>
          プログラミング入門B: 2023.1~2 筑波大学 情報学群 知識情報・図書館学類
        </li>
      </ol>
    </div>
    <hr />
    <div class="cardContainer">
      <b class="carrierInfo">リサーチアシスタント / Research Assistant</b>
      <ol class="content">
        <li>
          図書館情報メディア系: 2022.8 ~ 2023.3 特許情報等を用いた技術トレンド分析・予測に関する実用システム化の検証
        </li>

      </ol>
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
