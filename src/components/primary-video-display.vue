<template lang="html">
  <section class="pvd">
    <h2>Latest Content</h2>
    <div class="pvd-main">
      <video
        class="pvd-main__video"
        src="blob:https://d3jvl7e3uitd3.cloudfront.net/691bec63-8e7f-b64d-ac9d-f10233ff4768"
        controls
        autoplay
      ></video>
      <aside class="pvd-main__description">
        <h3 class="description__header">
          <router-link class="header__link" to="/player/id"
            >Project Meeting</router-link
          >
        </h3>
        <div class="description__row">
          <label class="description__row-label">Category: </label>
          <p class="description__row-value">MoCo Team Meetings</p>
        </div>
        <div class="description__row">
          <label class="description__row-label">Date: </label>
          <p class="description__row-value">December 3, 2019</p>
        </div>
        <div class="description__row">
          <label class="description__row-label">Description: </label>
          <p class="description__row-value">
            Our Weekly Project Meeting to discuss new things we're doing across
            the org and other fun things.<br /><br />For more info, click
            <a href="#">here</a>
          </p>
        </div>
      </aside>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PrimaryVideoDisplay extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pvd-main {
  display: flex;
  flex-direction: row;
  align-items: top;
}

.pvd-main .pvd-main__video {
  flex: 5;
}
.pvd-main .pvd-main__description {
  margin-left: 2em;
  flex: 3;
}

.pvd-main__description .description__header {
  margin-top: 0;
}

.description__header .header__link {
  color: #000;
  text-decoration: none;
}

.pvd-main__description .description__row {
  margin: 0.5em 0;
}

.description__row .description__row-label {
  font-weight: bold;
  display: inline;
}

.description__row .description__row-value {
  margin-left: 0.5em;
  display: inline;
}
</style>
