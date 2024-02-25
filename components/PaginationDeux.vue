<template>
  <div class="pagination_d" v-if="nbr_of_pages > 1">
    <div :class="currentpage - 1 < 0 ? 'noclick' : null" @click="
      currentpage -= 1;
    $fetch();
    ">
      <i class="arrow arrow-left"></i>
    </div>
    <nuxt-link :to="getLink()" v-for="index in nbr_of_pages" :class="currentpage == index - 1 ? 'active' : null"
      :key="index" @click="
        currentpage = index - 1;
      $fetch();
      ">
      {{ index }}
    </nuxt-link>
    <div :class="currentpage + 1 >= nbr_of_pages ? 'noclick' : null" @click="
      currentpage += 1;
    $fetch();
    ">
      <i class="arrow arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {};
  },
  props: ["nbr_of_pages", "currentpage"],
  methods: {
    navigate() {
      let q = "page=" + this.currentpage;
    },
    getLink() {
      if (this.currentpage != 0) {
        this.$router.push({
          path: this.$route.path,
          query: { ...this.$route.query, page: this.currentpage },
        });
      }
      return "";
    },
  },
};
</script>

<style>
.pagination_d {
  margin-top: 1.5em;
  width: 50%;
  margin-left: 25%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.pagination_d a {
  border: 1px black solid;
  width: 34px;
  height: 31px;
  border-radius: 4px;
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
  cursor: pointer;
}

.pagination_d a:hover,
.pagination_d a.active {
  background: var(--color-1);
  color: white;
}

.pagination_d .arrow {
  border-color: #000;
}
</style>
