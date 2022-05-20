<template>
  <section id="carrier" class="section">
    <div class="container">
      <h2 class="title is-2 has-text-centered">Carrier</h2>
      <separator></separator>
      <div class="cardContainer columns">
        <b class="conference">インターンシップ / Internship</b>
      </div>
      <ul>
          <li>
            日本総研
          </li>
          <li>
            楽天
          </li>
        </ul>
      <hr />

      <div class="cardContainer columns">
        <b class="conference">ティーチングアシスタント / Teaching Assistant</b>
      </div>
      <hr />

    </div>
  </section>
</template>

<script>
</script>

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
</style>
