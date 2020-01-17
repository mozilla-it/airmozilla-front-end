<template lang="html">
  <section class="svd">
    <div class="svd-main">
      <video
        class="svd-main__video"
        src="blob:https://d3jvl7e3uitd3.cloudfront.net/691bec63-8e7f-b64d-ac9d-f10233ff4768"
        controls
        autoplay
      ></video>
      <aside class="svd-main__description">
        <h3 class="description__header">
          <router-link class="header__link" to="/player/id"
            >Project Meeting</router-link
          >
        </h3>
        <aside class="description__meta">
          <p class="meta__item meta__item--primary">
            <a class="primary__link" href="#">MoCo Team Meetings</a>
          </p>
          <p class="meta__item meta__item--secondary">
            November 27, 2019
          </p>
          <p class="meta__item meta__item--secondary">
            Public
          </p>
        </aside>
        <div class="description__row">
          <label class="description__row-label">Description: </label>
          <p class="description__row-value">
            Our Weekly Project Meeting to discuss new things we're doing across
            the org and other fun things.
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
.svd-main {
  display: flex;
  flex-direction: row;
  align-items: top;
}

.svd-main .svd-main__video {
  width: 60%;
}
.svd-main .svd-main__description {
  margin-left: 2em;
}

.svd-main__description .description__header {
  margin-top: 0;
}

.svd-main__description .description__meta {
  display: flex;
  flex-direction: row;
}

.description__meta .meta__item {
  border-right: 1px solid #2c3e50;
  padding-right: 0.5em;
  padding-left: 0.5em;
}

.description__meta .meta__item:first-child {
  padding-left: 0;
}

.description__meta .meta__item:last-child {
  border-right: none;
}

.description__header .header__link {
  color: #000;
  text-decoration: none;
}

.svd-main__description .description__row {
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
