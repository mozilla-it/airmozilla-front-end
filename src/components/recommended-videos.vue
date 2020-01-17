<template lang="html">
  <section class="r">
    <h3>Recommended</h3>
    <div class="r-main">
      <TertiaryVideoDisplay class="r-main__item" />
      <TertiaryVideoDisplay class="r-main__item" />
      <TertiaryVideoDisplay class="r-main__item" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TertiaryVideoDisplay from "./tertiary-video-display.vue";

@Component({
  components: { TertiaryVideoDisplay }
})
export default class RecommendedVideos extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.r h3 {
  margin-top: 0;
}
.r-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.r-main .r-main__item {
  margin-top: 1em;
}

.r-main .r-main__item:first-child {
  margin-top: 0;
}

.r-main .item__video {
  width: 100%;
}
.r-main .item__description {
}

.item__description .description__header {
  margin-top: 0;
}

.description__header .header__link {
  color: #000;
  text-decoration: none;
}
</style>
