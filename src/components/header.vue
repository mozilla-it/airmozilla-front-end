<template lang="html">
  <header class="header">
    <div class="header-content">
      <img
        class="header__logo"
        src="../assets/logo.svg"
        alt="Air Mozilla Logo"
      />
      <input class="header__search" />
      <button class="header__signin">Sign In</button>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  background: #333;
  height: 4em;
}

.header .header-content {
  width: 50%;
  max-width: 70em;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.header .header__logo {
  display: block;
}

.header .header__search {
  display: block;
}

.header .header__signin {
  display: block;
}
</style>
