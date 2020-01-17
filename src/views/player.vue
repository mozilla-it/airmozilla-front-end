<template>
  <div class="player">
    <Header />
    <main class="player__main">
      <PlayerVideo class="player__video" />
      <RecommendedVideos class="player__recommended" />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";
import PlayerVideo from "@/components/player-video.vue";
import RecommendedVideos from "@/components/recommended-videos.vue";

export default {
  name: "Player",
  components: {
    Header,
    PlayerVideo,
    RecommendedVideos
  },
  mounted() {
    console.log("player");
  }
};
</script>
<style scoped>
.player__main {
  margin-top: 3em;
  width: 50%;
  max-width: 70em;
  margin: 3em auto;
  display: flex;
  flex-direction: row;
}

.player__video {
  width: 80%;
}

.player__recommended {
  margin-left: 2em;
}
</style>
