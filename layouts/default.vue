<template>
  <div class="layout_skeleton">
    <client-only>
      <MsgToU />
      <Blob />
      <div
        class="generalMessage"
        v-if="!$store.state.message == ''"
        @click="$store.commit('msgToUsers', '')"
      >
        <div v-html="$store.state.message"></div>
        <a href>X</a>
      </div>

      <div
        v-if="$store.state.waitingLogInResult"
        style="
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          z-index: 9999;
        "
      ></div>
    </client-only>
    <section >
      <!-- <Nuxt /> -->
      <Nuxt keep-alive />

      <TheScrollUp />

    </section>
  </div>
</template>
<script>
export default {
  created() {
    if(process.client) {
      this.detectResize();
      window.addEventListener("resize", this.detectResize);
    }

  },
  methods: {
    detectResize(e) {
      this.$store.commit('setWindowWidth', window.innerWidth)
    },
  },
}
</script>
<style>
.layout_skeleton {
  /* background: #eee; */
  position: relative;z-index: 1;
}
</style>