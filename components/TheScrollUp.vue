<template>
  <section id="ScrollUp" @click="scrollToTop()" v-if="showArrow">
    <i class="triangle"></i>
  </section>
</template>

<script>
export default {
  name: "TheScrollUp",
  data: function() {
    return {
      showArrow: false
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  computed: {},
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    handleScroll(event) {
      const position =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.showArrow = position > window.innerHeight ? true : false;
    }
  }
};
</script>

<style scoped>
#ScrollUp {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: var(--color-1); */
  font-size: 50px;
  z-index: 3;
  border-radius: 50%;
  cursor: pointer;
  color: #bbb;
  transition: 0.5s ease;
  border: 1px #bbb solid;
  animation: 2s showBtnAnim;
}
#ScrollUp:hover {
  border: 1px #fff solid;
}
.triangle {
  border: solid #bbb;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 8px;
  transition: 0.5s ease;
  transform: translateY(4px) rotate(-135deg) 
}
#ScrollUp:hover .triangle {
  border: solid #fff;
  border-width: 0 1px 1px 0;
}
@keyframes showBtnAnim {
  from {
    opacity: 0;
  }
}

@media all and (max-width: 768px) {
  #ScrollUp {
    display: none;
  }
}
</style>
