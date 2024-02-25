<template>
  <!-- COMPOSANT MESSAGE GLOBAUX VIA LE STORE -->
  <section id="msgtou" v-if="$store.state.message_to_user.length">
    <div
      v-for="(item, index) in $store.state.message_to_user"
      @click="$store.commit('addMessage_to_user', item)"
      :key="index"
      class="itemMsg"
      :class="[item.type, removeAtEndDuration(item)]"
    >
      <div v-html="item.val"></div>
      <span class="delMsg">X</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "MsgToU",
  methods: {
    removeAtEndDuration(item) {
      setTimeout(() => {
        if (
          this.$store.state.message_to_user.findIndex(
            (el) => el.val === item.val
          ) != -1
        ) {
          this.$store.commit("addMessage_to_user", item);
        }
      }, item.duration);
      return "";
    },
  },
};
</script>

<style>
#msgtou {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-3);
  display: flex;
  flex-direction: column;
  z-index: 100;
  box-shadow: 0 0 100px 106px #4444;
  overflow: hidden;
  display: flex;
}
#msgtou .itemMsg {
  padding: 2px 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: calc(100% - 2rem);
}
#msgtou .itemMsg > div {
  flex: 1;
}
#msgtou .delMsg {
  width: 50px;
  height: 40px;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 1.5rem;
  font-family: "zooja-pro", sans-serif;
}
.itemMsg {
  transition: 0.5s ease;
}
.itemMsg:hover {
  background: #ccc;
}
.def_error {
  color: var(--color-1);
}
@keyframes hideglobalmsg {
  to {
    opacity: 0;
  }
}
</style>
