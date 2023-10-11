<template>
  <section id="publications" class="section no-h-padding">
    <div class="block has-text-centered">
      <h2 class="title is-2">Publications</h2>
      <separator></separator>
    </div>
    <div class="cardContainer columns">
        <b class="conference">学術雑誌論文・Refereed Journal Paper</b>
        <ol>
          <li>
            Shingo Watanabe, Hiroyoshi Ito, Masaki Matsubara, Atsuyuki Morishima, "Human-in-the-loop Latent Space Learning for Bibrecord-based Literature Management", International Journal on Digital Libraries,  Vol.XX, No.XX, pp.XX-XX, 202X.
          </li>
        </ol>
      </div>
    <div class="cardContainer columns">
      <b class="conference">国際会議・Workshop</b>
      <ol>
        <li>
          "A Document Management System based on Human-in-the-Loop Latent Space Learning". <u>Shingo Watanabe</u>，Hiroyoshi Ito，Masaki Matsubara，Atsuyuki Morishima．iConference2022 Student Symposium. 2022.3
        </li>
        <li>
          Shingo Watanabe, Hiroyoshi Ito, Masaki Matsubara and Atsuyuki Morishima, "Bibrecord-based Literature Management with Interactive Latent Space Learning", The 24th International Conference on Asia-Pacific Digital Libraries (ICADL 2022), November30-December2 ,2022, Hanoi, Vietnam <font color="red">(Best Student Paper Award)</font>
        </li>
        <li>
          Shingo Watanabe, Hiroyoshi Ito, Masaki Matsubara, Atsuyuki Morishima, "Human-in-the-loop Latent Space Learning for Bibrecord-based Literature Management", The 27th International Conference on Theory and Practice of Digital Libraries (TPDL 2023), September26-29 ,2023, Zadar, Croatia <font color="red">(IJDL Invited Paper)</font>
        </li>
      </ol>
    </div>
    <hr />
    <div class="cardContainer columns">
      <b class="conference">国内会議・ワークショップ</b>
      <ol>
        <li>
          "Human-in-the-loop 潜在空間学習による空間型インタラクティブ文献管理システム". <u>渡邉真悟</u>，伊藤寛祥，松原正樹，森嶋厚行．第14回データ工学と情報マネジメントに関するフォーラム(DEIM2022)．G21-1．8pages．<a href="https://cms.dbsj.org/deim2022/participant/?channel=paper&id=G21-1" target="_blank" rel="noopener noreferrer">論文</a>
        </li>
      </ol>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@import '~vars';
@import '~bulma/sass/utilities/mixins';

.project {
    min-width: 308px;
}

.project-list {
  padding: 1.5rem 0;

  @include mobile {
      padding: 1.5rem 1rem;
  }

  .project {
    padding: 0.5rem 1rem;

    a {
      position: relative;
      color: rgba($white, 0.7);
      transition: color 0.2s linear;

      &::after {
        content: '';
        background-color: $white;
        position: absolute;
        height: 2px;
        width: 0;
        left: -0.1rem;
        bottom: -0.25rem;
        transition: width 0.2s linear;
      }

      &.active {
        color: $white;

        &::after {
          width: calc(100% + 0.25rem);
        }
      }

      &:hover {
        color: $white;
      }
    }
  }
}

.section.no-h-padding {
  padding: 3rem 0;
}

.cardContainer {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  max-width: 2000px;
  margin: auto;
}

.conference {
  font-size: 2rem;
}

#bp {
  color: red;
}
</style>
