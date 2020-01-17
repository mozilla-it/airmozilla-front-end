<template lang="html">
  <div class="tvd">
    <video
      class="tvd__video"
      src="blob:https://d3jvl7e3uitd3.cloudfront.net/691bec63-8e7f-b64d-ac9d-f10233ff4768"
      controls
      autoplay
    ></video>
    <aside class="tvd__description">
      <label class="description__label">Project Meeting </label>
      <p class="description__value">November 27, 2019</p>
    </aside>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TertiaryVideoDisplay extends Vue {
  @Prop() private orientation!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tvd {
  display: flex;
  flex-direction: column;
  align-items: top;
}

.tvd.row {
  flex-direction: row;
}

.tvd .tvd__video {
  width: 100%;
}
.tvd .tvd__description {
  margin-top: 0.25em;
}
</style>
