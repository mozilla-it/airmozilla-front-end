<template>
  <div class="home">
    <Header />
    <main class="home__main">
      <PrimaryVideoDisplay />
      <p class="temp-text">More videos to come</p>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";
import PrimaryVideoDisplay from "@/components/primary-video-display.vue";

export default {
  name: "Home",
  components: {
    Header,
    PrimaryVideoDisplay
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

.temp-text {
  margin-top: 3em;
}
</style>
