<template>
  <section class="search">
    <Header />
    <main class="search__main">
      <h1>Search Results</h1>
      <aside class="search__meta">
        <p class="meta__content">
          604 results for <span class="content__value">{{ searchValue }}</span>
        </p>
      </aside>
      <section class="search__results">
        <SecondaryVideoDisplay class="results__item" />
        <SecondaryVideoDisplay class="results__item" />
        <SecondaryVideoDisplay class="results__item" />
      </section>
    </main>
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";
import SecondaryVideoDisplay from "@/components/secondary-video-display.vue";

export default {
  name: "Search",
  components: {
    Header,
    SecondaryVideoDisplay
  },
  computed: {
    searchValue() {
      return this.$route.query.q;
    }
  },
  mounted() {
    console.log("search");
  }
};
</script>
<style scoped>
.search__main {
  margin-top: 3em;
  width: 50%;
  max-width: 70em;
  margin: 3em auto;
}

.search__meta .meta__content .content__value {
  font-weight: bold;
}

.search__results {
  margin: 1em 0;
}

.results__item {
  margin: 3em 0;
}

.results__item:first-child {
  margin-top: 0;
}
</style>
