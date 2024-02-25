<template>
  <div>
    <section class="homecont">
      <div
        class="MenuBtn"
        @click="
          itemMenu = '';
          hideBkg();
        "
        v-if="itemMenu !== '' && $store.state.dynamicWindowWidth < 768"
      >
        <i class="fas fa-bars"></i>
      </div>

      <div
        class="giantCircle"
        v-if="itemMenu === '' || $store.state.dynamicWindowWidth >= 768"
      >
        <div class="centerCircle">
          <div
            class="behindBtns"
            @mousemove="
              hideBkg();
              itemMenu = '';
            "
          ></div>
          <div
            @mouseover="
              showBkg(menuItems[0][1]);
              itemMenu = 'stand-up';
            "
            @click="itemMenu = 'stand-up'"
          >
            <a
              class="navItem retourBtn"
              :class="itemMenu === 'stand-up' ? 'activeIM' : ''"
              >Stand Up !</a
            >
          </div>

          <div
            @mouseover="
              showBkg(menuItems[1][1]);
              itemMenu = 'diaporama';
            "
            class="navItem item1"
            :class="itemMenu === 'diaporama' ? 'activeIM' : ''"
          >
            Diaporama
          </div>

          <div
            @mouseover="
              showBkg(menuItems[2][1]);
              itemMenu = 'pagination';
            "
            class="navItem item2"
            :class="itemMenu === 'pagination' ? 'activeIM' : ''"
          >
            Pagination
          </div>

          <div
            @mouseover="
              showBkg(menuItems[3][1]);
              itemMenu = 'labyrinthe';
            "
          >
            <a
              class="navItem item3"
              :class="itemMenu === 'labyrinthe' ? 'activeIM' : ''"
              >Labyrinthe</a
            >
          </div>
          <div
            @mouseover="
              showBkg(menuItems[4][1]);
              itemMenu = 'photographie';
            "
            @click="itemMenu = 'photographie'"
          >
            <a
              class="navItem item4"
              :class="itemMenu === 'photographie' ? 'activeIM' : ''"
              >Photographies</a
            >
          </div>

          <div
            @mouseover="
              showBkg(menuItems[5][1]);
              itemMenu = 'cv';
            "
            @click="itemMenu = 'cv'"
          >
            <a
              class="navItem item5"
              :class="itemMenu === 'cv' ? 'activeIM' : ''"
              >Mon CV</a
            >
          </div>

          <div
            @mouseover="
              showBkg(menuItems[7][1]);
              itemMenu = 'mousefire';
            "
            @click="itemMenu = 'mousefire'"
          >
            <a
              class="navItem item6"
              :class="itemMenu === 'mousefire' ? 'activeIM' : ''"
              >Fun with p5</a
            >
          </div>

          <div
            @mouseover="
              showBkg(menuItems[6][1]);
              itemMenu = 'lab';
            "
            class="navItem item8"
            :class="itemMenu === 'lab' ? 'activeIM' : ''"
          >
            Le laboratoire
          </div>
        </div>
      </div>
      <!-- fin menu -->

      <div class="linkContent standup" v-if="itemMenu == 'stand-up'">
        <div>
          <div>
            <h3>Stand up !</h3>
            <legend class="smaller">
              <span>Réalisé en septembre 2019</span>
            </legend>
          </div>
          <div class="imgBox">
            <img src="/img/home/G10.JPG" alt />
            <img src="/img/home/jump.JPG" alt />
            <img src="/img/home/sc.JPG" alt />
          </div>
          <p>
            Projet libre et dernier projet de ma formation de développeur web.
            Il s'agit d'un site proposant plusieurs petits jeux fonctionnant
            grâce à des outils de reconnaissance faciale. On peut ainsi jouer en
            contrôlant un oiseau avec son nez ou encore contrôler des vaisseaux
            spatiaux avec ses oreilles. Il faut s'inscrire pour accéder au
            deuxième jeux, commenter sur le chat ou voir les meilleurs scores.
          </p>

          <p class="smaller">
            Technologies utilisées :
            <br />
            <span
              >HTML5, CSS3, JavaScript, jQuery, PHP et les librairies P5 et ML5
              (javascript une pour le traitement des canvas et l'autre pour la
              reconnaissance faciale)</span
            >
          </p>

          <a
            href="https://finger-in-the-noise.raphaelmouly.com/"
            class="btnHome"
            >Visiter le site</a
          >
        </div>
      </div>

      <div class="linkContent" v-if="itemMenu == 'diaporama'">
        <div>
          <div>
            <h3>Diaporama</h3>
            <legend class="smaller">
              <span>Réalisé en 2020</span>
            </legend>
          </div>
          <p>
            Un composant vuejs facile à intégrer et très paramétrable.
            <br />Des démos avec le html / css associés ainsi qu'un tuto sont
            visibles en cliquant ci-dessous
            <router-link to="/diaporama" class="btnHome"
              >Voir les diaporamas</router-link
            >
          </p>
        </div>
      </div>

      <div class="linkContent pagination" v-if="itemMenu == 'pagination'">
        <div>
          <div>
            <h3>Pagination</h3>
            <legend class="smaller">
              <span>Réalisé en Août 2020</span>
            </legend>
          </div>
          <p>
            Un composant vuejs facile à intégrer et paramétrable. Des démos avec
            le html / css associés sont visible ci dessous
            <router-link to="/paginator" class="btnHome"
              >Pagination</router-link
            >
          </p>
        </div>
      </div>

      <div class="linkContent labyrinthe" v-if="itemMenu == 'labyrinthe'">
        <div>
          <div>
            <h3>Labyrinthe</h3>
            <legend class="smaller">
              <span>Réalisé en 2020</span>
            </legend>
          </div>
          <p>
            <span
              >Un algorithme dessinant un labyrinthe de manière aléatoire.
              <br />
              Vous pouvez jouer en utilisatnt les ↑ ↓ → ← de votre clavier ainsi
              que la touche espace.</span
            >
            <br />
            <span>Réalisé avec la librairie p5.js</span>
            <a
              href="/maze2/index.html"
              class="btnHome"
              style="color: rgb(186, 0, 13)"
              >Jouer
            </a>
          </p>
        </div>
      </div>

      <div class="linkContent" v-if="itemMenu == 'photographie'">
        <div>
          <div>
            <h3>Photographie</h3>
            <legend class="smaller">
              <span>Réalisé en 2018</span>
            </legend>
          </div>
          <p>
            Un site exposant mes photos
            <nuxt-link to="/photographie" class="btnHome"
              >Photographie</nuxt-link
            >
            <!-- <a href="https://raphaelmouly.com/photo/index.html" class="btnHome"
            >Photographie</a
          > -->
          </p>
        </div>
      </div>

      <div class="linkContent labo" v-if="itemMenu == 'cv'">
        <div>
          <div>
            <h3>CV</h3>
            <legend class="smaller">
              <span>Réalisé en 2019</span>
            </legend>
          </div>
          <p>
            Mon CV aux formats HTML et pdf
            <br />
            <br />
            <a href="/cvweb/index.html" class="btnHome">curriculum vitae</a>
          </p>
        </div>
      </div>

      <div class="linkContent" v-if="itemMenu == 'mousefire'">
        <div>
          <div>
            <h3>Fun with P5.js</h3>
            <legend class="smaller">
              <span>Réalisé en 2020</span>
            </legend>
          </div>
          <p>
            <br />
            <br />
            <a href="/mousep5/index.html" class="btnHome">Vaisseau spatial</a>
            <a href="/fractal" class="btnHome">Fractal</a>
          </p>
        </div>
      </div>
      <div class="linkContent labo" v-if="itemMenu == 'lab'">
        <div>
          <div>
            <h3>Le laboratoire</h3>
            <p class="smaller"></p>
          </div>
          <p>
            Zone d'expérimentation et un peu de back end. L'espace est privé.
            <router-link
              :to="!$store.state.ws_key ? '/login' : '/backend'"
              class="btnHome"
              >Se connecter</router-link
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  transition: { name: "home", mode: "in-out" },

  data() {
    return {
      transitionencours: false,
      mousehoveritem: false,
      itemMenu: "",
      menuItems: [
        ["stand-up", "#B8D9DA"],
        ["diaporama", "#DAB9B8"],
        ["pagination", "#BBD2DB"],
        ["labyrinthe", "transparent"],
        ["photographie", "#DBC4BB"],
        ["cv", "#455970"],
        ["lab", "#333"],
        ["mousefire", "#d1c058"]
      ]
    };
  },
  beforeMount() {
    window.addEventListener("wheel", this.handleScroll);
  },
  mounted() {
    if (process.client) {
      this.callMaze();
    }
  },
  // beforeDestroy() {
  //   window.removeEventListener("wheel", this.handleScroll);
  //   this.destroyMaze();
  //   this.hideBkg();
  // },
  beforeRouteLeave(to, from, next) {
    window.removeEventListener("wheel", this.handleScroll);
    this.hideBkg();
    this.destroyMaze();
    next();
  },
  watch: {
    itemMenu: function(val) {
      if (document.getElementsByTagName("canvas")[0]) {
        if (val == "labyrinthe") {
          document.getElementsByTagName("canvas")[0].style.opacity = "1";
          if (document.getElementsByClassName("mazeBtn")) {
            for (let item of document.getElementsByClassName("mazeBtn")) {
              item.style.display = "block";
            }
          }
        } else {
          document.getElementsByTagName("canvas")[0].style.opacity = "0";
          if (document.getElementsByClassName("mazeBtn")) {
            for (let item of document.getElementsByClassName("mazeBtn")) {
              item.style.display = "none";
            }
          }
        }
      }
    }
  },
  methods: {
    toggleMaze() {},
    showBkg(val, imgName) {
      this.transitionencours = true;
      this.mousehoveritem = true;
      this.$el.style.setProperty("--col-match", val);

      let blobEl = document.getElementsByClassName("blob")[0];
      if (this.$store.state.dynamicWindowWidth > 768) {
        document.getElementsByClassName("smallerSvg")[0].style.transform =
          "scale(2.6) translateY(15%)";
      } else {
        document.getElementsByClassName("smallerSvg")[0].style.transform =
          "scale(0) ";
      }

      if (val !== "transparent") {
        document
          .getElementsByClassName("circle")[0]
          .setAttribute("stroke", val);
      } else {
        document
          .getElementsByClassName("circle")[0]
          .setAttribute("stroke", "#333");
      }
      // document
      //   .getElementsByClassName("morph-path2")[0]
      //   .setAttribute("stroke", val);
      // document
      //   .getElementsByClassName("morph-path2")[0]
      //   .setAttribute("stroke-opacity", "0.9");

      document
        .getElementsByClassName("circle")[0]
        .setAttribute("stroke-width", "2");
      const lastCol = blobEl.style.background;
      blobEl.style.background = val;
      blobEl.animate(
        [
          {
            background: lastCol
          },
          {
            background: val,
            // background: url,

            width: "160vw"
          }
        ],
        {
          duration: 500,
          iterations: 1
        }
      );
      setTimeout(() => {
        // blobEl.style.background = url;
        blobEl.style.background = val;
        blobEl.style.width = "160vw";
        this.transitionencours = false;
      }, 500);
    },
    hideBkg(val = "transparent") {
      this.mousehoveritem = false;
      this.$el?.style.setProperty("--col-match", val);
      if (this.transitionencours === false) {
        let blobEl = document.getElementsByClassName("blob")[0];
        if (!blobEl) {
          return;
        }
        setTimeout(() => {
          if (this.mousehoveritem == false) {
            blobEl.animate(
              [
                {
                  background: blobEl.style.background
                },
                {
                  background: val,
                  width: "100vw"
                }
              ],
              {
                duration: 500,
                iterations: 1
              }
            );
            document.getElementsByClassName("smallerSvg")[0].style.transform =
              "scale(1) translateX(0)";
            document
              .getElementsByClassName("circle")[0]
              .setAttribute("stroke", "white");
            document
              .getElementsByClassName("circle")[0]
              .setAttribute("stroke-width", "10");

            setTimeout(() => {
              blobEl.style.background = val;
              blobEl.style.width = "100vw";
            }, 500);
          }
        }, 200);
      }
    },
    handleScroll(event) {
      if (this.transitionencours === false) {
        let index = this.menuItems.findIndex(
          element => element[0] === this.itemMenu
        );
        if (event.deltaY <= 0) {
          console.log("up");
          const before = index - 1 >= 0 ? index - 1 : this.menuItems.length - 1;
          this.itemMenu = this.menuItems[before][0];
          this.showBkg(this.menuItems[before][1]);
        } else if (event.deltaY >= 0) {
          // console.log("down");
          const after = index + 1 < this.menuItems.length ? index + 1 : 0;
          this.itemMenu = this.menuItems[after][0];
          this.showBkg(this.menuItems[after][1]);
        }
      }
    },
    callMaze() {
      // if (!document.getElementById("mazeA")) {
      //   var script = document.createElement("script");
      //   script.src = "/maze/js/sketch.js";
      //   script.type = "text/javascript";
      //   script.id = "mazeA";
      //   var script2 = document.createElement("script");
      //   script2.src = "/maze/js/Cell.js";
      //   script2.type = "text/javascript";
      //   script2.id = "mazeB";
      //   document.getElementsByTagName("head")[0].appendChild(script);
      //   document.getElementsByTagName("head")[0].appendChild(script2);
      // } else {
      //   // remove();
      //   loop();
      // }
    },
    destroyMaze() {
      if (typeof noLoop() === "function") {
        noLoop();
      }
    }
  }
};
</script>
<style>
.homecont {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  overflow: hidden;
}
.linkContent {
  position: fixed;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  color: black;
  font-size: 1.2rem;
  /* padding: 2%; */
  transition: 2.5s ease;
  /* background: white; */
  /* box-shadow: 0px 0px 5px 2px #dddd; */
  /* z-index: -1; */
  /* border-top-left-radius: 50%; */
  letter-spacing: 4px;
  text-align: left;
}
.linkContent h3 {
  font-size: 3.4rem;
  line-height: 3rem;
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 2px;
  margin: 0;
  margin-top: 1%;
  margin-right: 1%;
  text-align: center;
  animation: 0.6s move_eye;
}
.linkContent legend {
  text-align: center;
  animation: 0.6s move_eye 0.1s;
}
/* .linkContent > * {
  animation: 0.6s move_eye;
} */
.navItem {
  text-shadow: 0px 0px 30px white;
}
@keyframes move_eye {
  from {
    transform: translate(30px, 30px);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
}
/* .linkContent img {
  position: absolute;
  right: 0;
  top: 5%;
  width: 10vw;
} */
.smaller {
  margin: 0;
}
.smaller span {
  font-size: 0.9rem;
}
.btnHome {
  color: var(--col-match);
  padding: 1rem 2rem;
  background-color: white;
  display: block;
  width: fit-content;
  margin: 1rem auto 1rem;
  cursor: pointer;
  transition: 0.5s ease;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: none;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
  animation: pulse 7s cubic-bezier(0.66, 0, 0, 1) 0.7s infinite;
}
@keyframes pulse {
  15% {
    box-shadow: 0 0 0 100px rgba(255, 255, 255, 0);
  }
  99% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}
.btnHome:hover {
  padding: 1rem 4rem;
  transition: 0.5s ease;
  box-shadow: 0 0 0px 2px var(--col-match);
}
/* .standup {
  display: flex;
} */
.behindBtns {
  position: absolute;
  top: -50vh;
  left: -100vh;
  width: 12vw;
  height: 100vh;
}
.imgBox {
  display: flex;
  justify-content: space-between;
}
.imgBox img {
  width: 30%;
  height: 20vh;
  margin-left: 1%;
  object-fit: cover;
}
.linkContent > div {
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2vh;
}

.linkContent > .smaller {
  margin-right: 2%;
}
.labo,
.labyrinthe {
  color: white;
}
.labyrinthe p,
.labyrinthe h3,
.labyrinthe legend {
  background: #3339;
  width: 80%;
  margin-left: 5%;
  padding: 1rem 5%;
}

.MenuBtn {
  position: absolute;
  top: 2%;
  left: 5%;
  color: black;
  font-size: 3em;
  transition: 0.3s ease;
  z-index: 3;
}

.mazeBtn {
  position: absolute;
  background: #fff;
  right: 1%;
  bottom: 9%;
  padding: 0.5rem 2rem;
  border: none;
  outline: none;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: "Archi", Helvetica, Arial, sans-serif;
}

.mazeBtn.trois {
  bottom: 1%;
}
.mazeBtn.second {
  bottom: 17%;
}

@media all and (max-width: 1400px) {
  .linkContent {
    font-size: 1rem;
  }
}
@media all and (max-width: 700px) {
  .linkContent {
    left: 0;
    top: 9%;
    overflow: scroll;
  }
  .standup {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .linkContent > div {
    height: auto;
    justify-content: center;
    text-align: center;
  }
  .linkContent h3 {
    font-size: 3rem;
  }
  .btnHome {
    position: fixed;
    top: 0;
    right: 1%;
    background: var(--col-match);
    color: white;
  }
  .labo,
  .labyrinthe {
    color: black;
  }

  .labyrinthe legend {
    display: none;
  }
  .labyrinthe h3 {
    background: none;
    text-shadow: 0 0 10px #fff;
  }
  .labyrinthe p {
    background: #fff9;
    font-size: 1.6rem;
  }
  .labyrinthe .btnHome {
    border: 1px rgb(186, 0, 13) solid;
  }
  .labo legend {
    display: none;
  }
  .labo h3 {
    background: none;
    text-shadow: 0 0 10px #fff;
  }
  .labo p {
    background: #fff6;
    font-size: 1.6rem;
  }
  .labo .btnHome {
    font-size: 1rem;
  }
}

@media all and (max-width: 500px) {
  .linkContent h3 {
    font-size: 2rem;
    margin-top: 1rem;
  }
  .btnHome {
    padding: 8px 12px;
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    animation: pulse 5s cubic-bezier(0.66, 0, 0, 1) 0.7s infinite;
  }
  @keyframes pulse {
    15% {
      box-shadow: 0 0 0 40px rgba(0, 0, 0, 0);
    }
    99% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
}
</style>