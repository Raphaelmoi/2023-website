<script>
export default {
  mounted() {},
  methods: {
    timeStampToHuman(timestamp) {
      return new Date(timestamp).toLocaleString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    },
    rewriteForUrl(el) {
      if (el) {
        return el
          .trim()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[\W]/gi, "-")
          .replace(/_/g, "-")
          .toLowerCase()
          .replace("--", "-")
          .replace("--", "-")
          .replace("--", "-")
          .replace(/\-$/, "");
      }
    }
  }
};
</script>