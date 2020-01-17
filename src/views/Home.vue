<template>
  <section class="home">
    <Header />
    <main class="home__main">
      <PrimaryVideoDisplay />
      <section class="home__primary-list">
        <h3>Upcoming</h3>
        <div class="primary-list__videos">
          <TertiaryVideoDisplay class="videos__item" orientation="row" />
          <TertiaryVideoDisplay class="videos__item" orientation="row" />
          <TertiaryVideoDisplay class="videos__item" orientation="row" />
        </div>
      </section>
      <section class="home__secondary-list">
        <h3>Recent</h3>
        <div class="secondary-list__videos">
          <TertiaryVideoDisplay class="videos__item" orientation="row" />
          <TertiaryVideoDisplay class="videos__item" orientation="row" />
          <TertiaryVideoDisplay class="videos__item" orientation="row" />
        </div>
      </section>
    </main>
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";
import PrimaryVideoDisplay from "@/components/primary-video-display.vue";
import TertiaryVideoDisplay from "@/components/tertiary-video-display.vue";

export default {
  name: "Home",
  components: {
    Header,
    PrimaryVideoDisplay,
    TertiaryVideoDisplay
  },
  mounted() {
    console.log("home");
  }
};
</script>
<style scoped>
.home__main {
  margin-top: 3em;
  width: 50%;
  max-width: 70em;
  margin: 3em auto;
}
.primary-list__videos {
  display: flex;
  flex-direction: row;
}

.primary-list__videos .videos__item {
  margin: 0 1em;
}

.primary-list__videos .videos__item:first-child {
  margin-left: 0;
}

.secondary-list__videos {
  display: flex;
  flex-direction: row;
}

.secondary-list__videos .videos__item {
  margin: 0 1em;
}

.secondary-list__videos .videos__item:first-child {
  margin-left: 0;
}
</style>
