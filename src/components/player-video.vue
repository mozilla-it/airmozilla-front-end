<template lang="html">
  <section class="pv">
    <div class="pv-main">
      <video
        class="pv-main__video"
        src="blob:https://d3jvl7e3uitd3.cloudfront.net/691bec63-8e7f-b64d-ac9d-f10233ff4768"
        controls
        autoplay
      ></video>
      <aside class="pv-main__description">
        <h3 class="description__header">Project Meeting</h3>
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
        <div class="description__row">
          <label class="description__row-label">Level: </label>
          <p class="description__row-value">
            Public
          </p>
        </div>
        <div class="description__row">
          <label class="description__row-label">Tags: </label>
          <ul class="description__row-value">
            <li><a href="#">#ProjectMeetings</a></li>
            <li><a href="#">#TeamMeetings</a></li>
          </ul>
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
.pv-main {
  display: flex;
  flex-direction: column;
  align-items: top;
}

.pv-main .pv-main__video {
  width: 100%;
}
.pv-main .pv-main__description {
  margin-top: 2em;
}

.pv-main__description .description__header {
  margin-top: 0;
}
.pv-main__description .description__row {
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

.description__row ul.description__row-value li {
  display: inline;
  margin-right: 0.5em;
}
</style>
