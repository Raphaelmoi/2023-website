<template>
  <section class="blobs" @click="speed=5000">
    <!-- <div class="text">
      MON CONTENU
      <br />MON CONTENU
      <br />MON CONTENU
      <br />MON CONTENU
      <br />MON CONTENU
      <br />MON CONTENU
    </div>-->
    <div class="blob">
      <!-- <svg viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"> -->
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 150 150"
        class="biggerSvg"
      >
        <g>
          <path
            fill="white"
            fill-opacity="0"
            id="mypath"
            class="st1 morph-path2"
            d="M46.4,-80.4C59.9,-72.6,70.4,-59.7,77.1,-45.4C83.8,-31.1,86.8,-15.6,86.9,0.1C87,15.7,84.2,31.3,76.9,44.6C69.6,57.9,57.8,68.8,44.2,76.8C30.7,84.8,15.3,89.9,-0.2,90.1C-15.7,90.4,-31.3,85.9,-45.7,78.3C-60,70.8,-73.1,60.3,-80.3,46.7C-87.5,33.2,-88.8,16.6,-88,0.4C-87.3,-15.7,-84.5,-31.4,-76.9,-44.3C-69.3,-57.1,-56.8,-67,-43.2,-74.7C-29.6,-82.4,-14.8,-88,0.8,-89.4C16.5,-90.9,33,-88.2,46.4,-80.4Z"
            stroke="white"
            stroke-width="80"
            stroke-opacity="1"
          />
        </g>
      </svg>

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 350 350"
        class="mediumSvg"
      >
        <g>
          <path
            fill-opacity="0"
            fill="gray"
            class="smallCircle"
            d="M46.4,-80.4C59.9,-72.6,70.4,-59.7,77.1,-45.4C83.8,-31.1,86.8,-15.6,86.9,0.1C87,15.7,84.2,31.3,76.9,44.6C69.6,57.9,57.8,68.8,44.2,76.8C30.7,84.8,15.3,89.9,-0.2,90.1C-15.7,90.4,-31.3,85.9,-45.7,78.3C-60,70.8,-73.1,60.3,-80.3,46.7C-87.5,33.2,-88.8,16.6,-88,0.4C-87.3,-15.7,-84.5,-31.4,-76.9,-44.3C-69.3,-57.1,-56.8,-67,-43.2,-74.7C-29.6,-82.4,-14.8,-88,0.8,-89.4C16.5,-90.9,33,-88.2,46.4,-80.4Z"
            stroke="white"
            stroke-width="10"
          />
        </g>
      </svg>

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
        class="smallerSvg"
      >
        <g>
          <path
            fill-opacity="0"
            fill="gray"
            class="circle"
            d="M46.4,-80.4C59.9,-72.6,70.4,-59.7,77.1,-45.4C83.8,-31.1,86.8,-15.6,86.9,0.1C87,15.7,84.2,31.3,76.9,44.6C69.6,57.9,57.8,68.8,44.2,76.8C30.7,84.8,15.3,89.9,-0.2,90.1C-15.7,90.4,-31.3,85.9,-45.7,78.3C-60,70.8,-73.1,60.3,-80.3,46.7C-87.5,33.2,-88.8,16.6,-88,0.4C-87.3,-15.7,-84.5,-31.4,-76.9,-44.3C-69.3,-57.1,-56.8,-67,-43.2,-74.7C-29.6,-82.4,-14.8,-88,0.8,-89.4C16.5,-90.9,33,-88.2,46.4,-80.4Z"
            stroke="white"
            stroke-width="10"
          />
        </g>
      </svg>

      <!-- <h2>du texte</h2> -->
    </div>
  </section>
</template>

<script>
// import anime from "animejs/lib/anime.es.js";
// https://www.blobmaker.app/
// https://animejs.com/documentation/#pennerFunctions
 
export default {
  name: "Blob",

  data: function () {
    return {
      pathEl: null,
      speed: 10000,
      pathStep: [
        "M45.2,-78.8C58.7,-70.4,70,-58.7,77.6,-45C85.3,-31.3,89.2,-15.6,88.5,-0.4C87.8,14.8,82.5,29.7,74.6,42.9C66.7,56.1,56.2,67.6,43.3,75.5C30.5,83.3,15.2,87.4,-0.3,87.9C-15.9,88.5,-31.7,85.5,-45.4,78.1C-59,70.7,-70.4,59,-77.4,45.2C-84.3,31.5,-86.8,15.7,-87.3,-0.3C-87.8,-16.3,-86.3,-32.6,-79.3,-46.3C-72.3,-60.1,-59.9,-71.2,-45.8,-79.3C-31.7,-87.4,-15.8,-92.6,0,-92.5C15.8,-92.5,31.6,-87.3,45.2,-78.8Z",
        "M42.7,-75.3C55.4,-66.7,65.9,-55.4,73,-42.4C80.1,-29.4,83.8,-14.7,85.2,0.8C86.7,16.3,85.8,32.7,78.7,45.6C71.6,58.6,58.2,68.2,44.1,75.4C29.9,82.6,15,87.5,-0.2,87.8C-15.4,88.2,-30.8,84.1,-43.7,76.2C-56.6,68.2,-67,56.5,-75.9,43.1C-84.8,29.8,-92.1,14.9,-92.1,0C-92.1,-14.9,-84.7,-29.8,-76.4,-44.1C-68.1,-58.4,-58.8,-72.1,-45.9,-80.6C-33,-89.1,-16.5,-92.4,-0.8,-91.1C15,-89.8,30,-83.9,42.7,-75.3Z",
        "M46.4,-80.4C59.9,-72.6,70.4,-59.7,77.1,-45.4C83.8,-31.1,86.8,-15.6,86.9,0.1C87,15.7,84.2,31.3,76.9,44.6C69.6,57.9,57.8,68.8,44.2,76.8C30.7,84.8,15.3,89.9,-0.2,90.1C-15.7,90.4,-31.3,85.9,-45.7,78.3C-60,70.8,-73.1,60.3,-80.3,46.7C-87.5,33.2,-88.8,16.6,-88,0.4C-87.3,-15.7,-84.5,-31.4,-76.9,-44.3C-69.3,-57.1,-56.8,-67,-43.2,-74.7C-29.6,-82.4,-14.8,-88,0.8,-89.4C16.5,-90.9,33,-88.2,46.4,-80.4Z",
      ],
    };
  },
  props: {
    // speed: {
    //   type: String, // not 'number'
    //   required: false,
    //   default: "1500",
    // },
  },
  computed: {
    // speedProps: function () {
    //   return parseInt(this.speed);
    // },
  },
  mounted() {
    this.animateCircle(" .morph-path2", 10000);
    this.animateCircle(" .smallCircle", 7000);
    this.animateCircle(" .circle", 5000);
  },
  methods: {
    animateCircle(targetEl, speed) {
      var morph2 = this.$anime({
        targets: targetEl,
        d: this.pathStep,
        duration: speed,
        direction: "alternate",
        autoplay: true,
        easing: "linear",
        elasticity: 1000,
        loop: true,
      });
    },
    grow(idEl) {
      document.getElementById("idEl").getAttribute("viewBox");
      document.getElementById("idEl").setAttribute("viewBox", "0 0 200 200");
    },
  },
};
</script>

<style scoped>
.blobs {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  /* z-index: -2; */
  transition: 1s ease;
  /* background: #eee; */
}
.blobs:hover {
  /* transition: 1s ease; */
}
.blobs .text {
  /* background: tomato; */
  font-size: 5rem;
}
.blob {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.blob svg {
  position: absolute;
  top: 0;
  left: 0;
  transition: 1s ease-in-out;
}
.blob path {
  transform: translate(50%, 20%);
  position: absolute;
  top: 0;
  left: 0;
}
.blob h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media all and (max-width: 1100px) {
  .blob path {
    transform: translate(50%, 30%);
  }
}
@media all and (max-width: 1000px) {
  .blob path {
    transform: translate(50%, 40%);
  }
}
@media all and (max-width: 700px) {
  .blob svg {
    height: 100vh;
    width: 100vw;
  }
  .blob path {
    transform: translate(50%, 60%) scale(1.5);
  }
}
</style>
