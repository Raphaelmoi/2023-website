<template>
  <!-- 
  slidespeed="500"        ---//>vitesse défilement animation slide ,default 500
  timeslide="5100"        ---//> un nbre de ms. Si non fournis pas de défilement auto ,default pas fournis
  sliderheight="450px"  --- //> un nbre avec sa valeur (px, vh,%,...), default 450px . Peut-etre "auto" avec image en 'contain'
      ||==//> si very_auto la taille du diapo s'asapte à la hauteur de l'image
  slidewidth="100"        ---//> un chiffre sans sa valeur -> ce sera un %
  unactiveclass="blackWhite"---//> une classe pour les images non active
  activeclass=""              ---//>  une classe pour l'image active
  bubbles='nomclass'     ---//> nom de classe pour navigations par bulles. 
          ||==//>Par default desactivé, 
          ||==//>si 'true'  un css de base est fournis
          ||==//>si 'number'  les bulles contiennes le numéro de slide

  leftnav_class                 ---//>  class pour l'élément <i> btn gauche
  rightnav_class              ---//>  class pour l'élément <i> btn droite
  playbtn                         ---//>  class pour l'élément div btn play
  pausebtn                       ---//>  class pour l'élément div btn pause
  c'est classes peuvent etre une classe font-awesome ou une classe avec un background-image : url()
  du css par default est fournis
  pour cahcher un bouton mettre une classe non valide 
  Par défault les images ont un comportement contain 
  ---//>BACKGROUND-SIZE surcaster css pour contain / cover default cover 
    .imageContainer > * > * {object-fit: cover;}
  ---//> MARGES surcaster css pour des marges entre chaque slide
         .imageContainer > * {padding: 10px;}

    Une classe "after" puis  "aft1", "aft2",... sont données aux slides de droite de l'image actuel pour animation 
    Une classe "before" "bef1", "bef2",... sont données  aux slides de gauche de l'image actuel pour animation 

  Dans slot mettre les images dans des div ou des a (ou autres) mais pas directement
  ---//> exemple <Slideshow> 
                              <div>
                                <img />
                                </div>
                                <a>
                                  <img/> 
                                </a>
                                
                              </Slideshow>
  -->
  <div class="mainSlider">
    <div :id="id" class="noOverflow">
      <div
        class="imageContainer grabbable"
        :style="dynamicwidth"
        tabindex="1"
        @keyup.space="timer !== null ? deleteInterval() : userNav(1)"
        @touchstart="startAction"
        @touchmove="moveAction"
        @touchend="stopAction"
        @mousedown="startAction"
        @mousemove="moveAction"
        @mouseup="stopAction"
        @mouseleave="stopAction"
      >
        <slot></slot>
      </div>
    </div>

    <a class="slideBtn btnLeft" @click="userNav(-1)" @touchend="userNav(-1)">
      <i :class="leftnav_class"></i>
    </a>
    <a class="slideBtn btnRight" @click="userNav(1)" @touchend="userNav(1)">
      <i :class="rightnav_class"></i>
    </a>

    <div
      class="btnPlayPause"
      v-if="timeslide"
      @click="timer !== null ? deleteInterval() : userNav(1) "
    >
      <div :class="timer !== null ? playbtn : pausebtn">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="bubbleBox" v-if="bubbles">
      <div
        v-for="number in initialNbrOfChild"
        :key="number"
        :class="bubbleStyle(number)"
        @click="goToSlide(number)"
      >
        <span v-if="bubbles === 'number'">{{number}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// module.exports = {
export default {
  name: "Slideshow",
  data: function () {
    return {
      id: "slideshow" + this._uid, //donne id unique à chaque diapo
      slideshowEl: null, //stock le doc.getElementById obtenu grâce à l'id ci dessus
      imgContainer: null,
      nbrOfslides: 0, //nombre de slides -> des copies seront ajoutés au besoin (container trop grand, img trop petite,...)
      initialNbrOfChild: 0, //nbre slides sans copies
      slideshowIndex: 0, //utile pour la nav avec bubbles
      timer: null,
      startXposition: -1, //trace du précedent evenement tactile ou souris
      startYposition: -1, //trace du précedent evenement tactile ou souris
      direction: "", //direction du swipe
      clickeventAction: false, //Boolean pour déclencher swipe avec la souris
      mainImage: 2, // définis quel image est considéré comme 'active' décalage induit par le marginleft
      slidewidthInPx: null /*recupere taille réel en px d'une slide */,
      manualScrollX: 0 /*pour transition fluide entre navigation tactile et animation */,
      clickDuration: 0 /*Mesure duree du click pour savoir si on active ou non href */,
    };
  },
  props: {
    slidespeed: {
      //vitesse de l'animation
      type: String, // not 'number'
      required: false,
      default: "500",
    },
    sliderheight: {
      //height du diapo
      type: String,
      required: false,
      default: "450px",
    },
    slidewidth: {
      //width des slide
      type: String,
      required: false,
      default: "100",
    },
    timeslide: String, //default pas de timer
    activeclass: String, //class css active
    unactiveclass: String, //class css unactive
    bubbles: String, //boolean en string récuper 'true' si besoin
    leftnav_class: {
      //class css pour btn navigation vers la gauche
      type: String,
      required: false,
      default: "arrow_defCSS",
    },
    rightnav_class: {
      //class css pour btn navigation vers la droite
      type: String,
      required: false,
      default: "arrow_defCSS arrRight",
    },
    playbtn: {
      //btn play class css par défault
      type: String,
      required: false,
      default: "play_defCSS",
    },
    pausebtn: {
      //btn pause class css par défault
      type: String,
      required: false,
      default: "pause_defCSS",
    },
    handpower: {
      //btn pause class css par défault
      type: String,
      required: false,
      default: "1",
    },
  },
  computed: {
    dynamicwidth: {
      get() {
        return "width :" + this.nbrOfslides * parseInt(this.slidewidth) + "% ";
      },
    },
  },
  mounted: function () {
    this.slideshowEl = document.getElementById(this.id);
    this.slidewidthInPx = Math.round(
      this.slideshowEl.clientWidth * (+this.slidewidth / 100)
    );
    this.imgContainer = this.slideshowEl.getElementsByClassName(
      "imageContainer"
    )[0];
    //marque le début d'un cycle avec un nom de classe
    this.imgContainer.children[0].classList.add("prems");
    this.nbrOfslides = this.imgContainer.children.length;
    //marginleft -> la taille d'une image + la moitié de la différence entre 100 et la taille de l'img (résultat en néagtif)
    const x = parseInt(this.slidewidth);
    const marLeft = this.getMarginLeft(x);

    this.imgContainer.style.marginLeft = "-" + marLeft + "%";
    //défini quelle image est considéré comme active : le margin-left + la moitié de l'écran divisé par la taille de chaque slide arrondi à l'unité inférieur
    this.mainImage = Math.floor((marLeft + 50) / x);
    //création de nouveaux éléments pour pallier le manque d'image sur une taille d'affichage trop grande
    let futurSize = this.nbrOfslides * x;
    this.initialNbrOfChild = this.nbrOfslides;
    //creer les clones nécessaire en doublant, triplant, ou+ les slides de bases
    while (futurSize <= 100 + 2 * marLeft) {
      for (let i = 0; i < this.initialNbrOfChild; i++) {
        const cln = this.imgContainer.children[i].cloneNode(true);
        this.imgContainer.appendChild(cln);
      }
      this.nbrOfslides = this.imgContainer.children.length;
      futurSize = this.nbrOfslides * x;
    }
    //compense le décalage de trois images dus au marginleft et nécessaire à la transition
    //agit comme this.nav(3)
    for (let i = 0; i < 3; i++) {
      this.imgContainer.insertBefore(
        this.imgContainer.lastElementChild,
        this.imgContainer.childNodes[0]
      );
    }
    this.setClassName();
    //definir hauteur du diapo selon props -> default = 420px
    this.$nextTick(() => {
      this.setHeight();
    });

    this.slideshowEl.style.setProperty(
      "--transition-duration",
      this.slidespeed * 0.8 + "ms"
    );
    //si il y a une option timer
    if (this.timeslide) {
      this.createInterval();
    }
    this.launchKeyEvents();
  },
  beforeDestroy: function () {
    this.deleteInterval();
  },
  methods: {
    //donne un nom de classe à chaque slide selon si elle est active ou non
    setClassName() {
      for (var j = 0; j < this.imgContainer.childNodes.length; j++) {
        if (this.imgContainer.children[j]) {
          for (var k = 0; k < this.imgContainer.children.length; k++) {
            if (this.imgContainer.children[j].classList.contains("bef" + k)) {
              this.imgContainer.children[j].classList.remove("bef" + k);
            }
            if (this.imgContainer.children[j].classList.contains("aft" + k)) {
              this.imgContainer.children[j].classList.remove("aft" + k);
            }
          }
          if (this.activeclass) {
            if (j === this.mainImage) {
              this.imgContainer.children[j].classList.add(this.activeclass);
            } else {
              if (
                this.imgContainer.children[j].classList.contains(
                  this.activeclass
                )
              ) {
                this.imgContainer.children[j].classList.remove(
                  this.activeclass
                );
              }
            }
          }
          if (this.unactiveclass) {
            if (j !== this.mainImage) {
              this.imgContainer.children[j].classList.add(this.unactiveclass);
            } else {
              this.imgContainer.children[j].classList.remove(
                this.unactiveclass
              );
            }
          }
          if (j > this.mainImage) {
            if (this.imgContainer.children[j].classList.contains("before")) {
              this.imgContainer.children[j].classList.remove("before");
            } else this.imgContainer.children[j].classList.add("after");
            this.imgContainer.children[j].classList.add(
              "aft" + (j - this.mainImage)
            );
          } else if (j < this.mainImage) {
            if (this.imgContainer.children[j].classList.contains("after")) {
              this.imgContainer.children[j].classList.remove("after");
            } else this.imgContainer.children[j].classList.add("before");
            this.imgContainer.children[j].classList.add(
              "bef" + (this.mainImage - j)
            );
          } else if (j === this.mainImage) {
            if (this.imgContainer.children[j].classList.contains("after")) {
              this.imgContainer.children[j].classList.remove("after");
            }
            if (this.imgContainer.children[j].classList.contains("before")) {
              this.imgContainer.children[j].classList.remove("before");
            }
            if (this.sliderheight === "very_auto") {
              let imgH;
              try {
                imgH = this.imgContainer.children[j].getElementsByTagName(
                  "img"
                )[0].naturalHeight;
              } catch (error) {
                imgH = this.imgContainer.children[0].innerHeight;
              }
              imgH = imgH > window.innerHeight ? window.innerHeight : imgH;
              this.slideshowEl.style.setProperty(
                "--current_height",
                imgH + "px"
              );
            }
          }
        }
      }
    },

    launchKeyEvents() {
      this.imgContainer.onkeydown = (evt) => {
        evt = evt || window.event;
        // left
        if (evt.keyCode == 37) {
          this.userNav(-1);
        }
        //right
        if (evt.keyCode == 39) {
          this.userNav(1);
        }
        //space bar
        if (evt.keyCode == 32) {
          evt.preventDefault();
          if (this.timer !== null) {
            this.deleteInterval();
          } else this.userNav(1);
        }
      };
    },
    createInterval() {
      this.timer = window.setInterval(() => {
        this.nav(1);
      }, this.timeslide);
    },
    deleteInterval() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
    },
    // navigation "manuelle" -> reset le set interval avant navigation
    userNav(direction) {
      if (this.timeslide) {
        this.deleteInterval();
        this.createInterval();
      }
      this.nav(direction);
    },

    goToSlide(imageIndex) {
      if (this.timeslide) {
        this.deleteInterval();
        this.createInterval();
      }
      //fait en sorte que le premier element soit celui ayant une class "prems"
      while (
        this.imgContainer.children[3].classList.contains("prems") == false
      ) {
        this.nav(1);
      }
      //puis conduit à la slide choisie
      for (let i = 0; i < imageIndex - 1; i++) {
        this.nav(1);
      }
    },

    setHeight() {
      if (this.sliderheight === "very_auto") {
        let imgH;
        try {
          var imageEl = this.imgContainer.children[0].getElementsByTagName(
            "img"
          )[0];
          imgH = imageEl.naturalHeight;
        } catch (error) {
          imgH = this.imgContainer.children[0].innerHeight;
        } finally {
          imgH = imgH > window.innerHeight ? window.innerHeight : imgH;
          imgH = imgH === 0 ? "auto" : imgH + "px";
          this.slideshowEl.style.setProperty("--current_height", imgH);
          this.slideshowEl.style.height = "var(--current_height)";
          for (var i = 0; i < this.nbrOfslides; i++) {
            this.imgContainer.children[i].style.height =
              " var(--current_height)";
          }
        }
      } else {
        this.slideshowEl.style.height = this.sliderheight;
        //height of each slide
        for (var i = 0; i < this.nbrOfslides; i++) {
          this.imgContainer.children[i].style.height = this.sliderheight;
        }
      }
    },
    getMarginLeft(x) {
      const y = (100 - x) / 2;
      let marLeft = 2 * x + (x - y);
      if (marLeft === 0) {
        marLeft = x;
      }
      return Math.abs(marLeft);
    },
    nav(direction) {
      this.findNextValue(direction);
      this.animateSlide(direction);
      this.setClassName();
    },
    findNextValue(direction) {
      let nextValue = this.slideshowIndex + direction;
      if (nextValue >= this.initialNbrOfChild) {
        nextValue = 0;
      } else if (nextValue < 0) {
        nextValue = this.initialNbrOfChild - 1;
      }
      this.slideshowIndex = nextValue;
    },
    animateSlide(direction) {
      if (direction == 1) {
        const xx = this.manualScrollX + this.slidewidthInPx;
        this.imgContainer.animate(
          [
            {
              transform: "translateX(" + Math.abs(xx) + "px)",
            },
            { transform: "translateX(0)" },
          ],
          {
            duration: parseInt(this.slidespeed),
            iterations: 1,
          }
        );
        this.imgContainer.appendChild(this.imgContainer.firstElementChild);
      } else {
        this.imgContainer.insertBefore(
          this.imgContainer.lastElementChild,
          this.imgContainer.children[0]
        );
        const xx = -this.manualScrollX + this.slidewidthInPx;
        this.imgContainer.animate(
          [
            {
              transform: "translateX(-" + Math.abs(xx) + "px)",
            },
            { transform: "translateX(0)" },
          ],
          {
            duration: parseInt(this.slidespeed),
            iterations: 1,
          }
        );
      }
    },
    moveAction(event) {
      if (this.clickeventAction) {
        event.preventDefault();
        let currentX, currentY;
        if (event.type === "touchmove") {
          currentX = event.touches[0].clientX;
          currentY = event.touches[0].clientY;
        } else {
          currentX = event.clientX;
          currentY = event.clientY;
        }

        if (
          Math.abs(this.startXposition - currentX) > 50 ||
          Math.abs(this.startYposition - currentY) > 50
        ) {
          if (this.startXposition !== -1 || this.startYposition !== -1) {
            const xORy =
              Math.abs(this.startXposition - currentX) >
              Math.abs(this.startYposition - currentY)
                ? "x"
                : "y";

            if (xORy === "x") {
              if (this.startXposition - currentX > 50) {
                this.direction = "E";
              } else if (this.startXposition - currentX < -50) {
                this.direction = "O";
              }
            } else {
              if (this.startYposition - currentY > -30) {
                this.direction = "N";
              } else if (this.startYposition - currentY < -30) {
                this.direction = "S";
              }
            }
          }
        }
        let t = this.startXposition - currentX;
        if (t >= 0) {
          t = 0 - t;
        } else {
          t = Math.abs(t);
        }
        this.manualScrollX = t;
        this.imgContainer.style.transform = "translateX(" + t + "px) ";
        //bloque les clicks de plus de 150ms
        if (new Date() - this.clickDuration > 10) {
          for (
            let i = 0;
            i < this.imgContainer.getElementsByTagName("a").length;
            i++
          ) {
            this.imgContainer
              .getElementsByTagName("a")
              [i].classList.add("noclick");
          }
        }
      }
    },
    startAction(event) {
      event.preventDefault();

      if (event.type === "touchstart") {
        this.startXposition = event.touches[0].clientX;
        this.startYposition = event.touches[0].clientY;
      } else {
        //mousedown
        this.startXposition = event.clientX;
        this.startYposition = event.clientY;
      }
      this.clickDuration = new Date();

      this.clickeventAction = true;
    },
    stopAction(event) {
      this.clickeventAction = false;

      switch (this.direction) {
        case "E":
          this.userNav(1);
          break;
        case "O":
          this.userNav(-1);
          break;
        case "N":
          window.scrollBy(0, window.innerHeight);
          break;
        case "S":
          window.scrollBy(0, -window.innerHeight);
          break;
        default:
          break;
      }
      //débloque href des liens
      setTimeout(() => {
        for (
          let i = 0;
          i < this.imgContainer.getElementsByTagName("a").length;
          i++
        ) {
          this.imgContainer
            .getElementsByTagName("a")
            [i].classList.remove("noclick");
        }
      }, 100);

      this.direction = "";
      this.startXposition = -1;
      this.startYposition = -1;
      this.imgContainer.style.transform = "unset";
    },
    bubbleStyle(nbr) {
      let css = "";
      if (this.bubbles) {
        if (this.bubbles == "true") {
          css += "bubble_default";
        } else {
          css += this.bubbles;
        }
      }
      if (nbr - 1 == this.slideshowIndex) {
        css += " activeBubble";
      } else {
        css += " unactiveBubble";
      }
      return css;
    },
  },
};
</script>

<style>
.grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
.grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
.mainSlider {
  position: relative;
}
.imageContainer {
  display: flex;
  position: relative;
  outline: none;
  transition: all var(--transition-duration) ease;
}

.imageContainer > * {
  width: 100%;
  transition: all var(--transition-duration) ease;
  transition: 1s ease;
}

.imageContainer > * > * {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slideBtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.slideBtn > * {
  transition: all 0.5s ease;
}
.slideBtn:hover > * {
  transition: all 0.5s ease;
}
.btnPlayPause {
  position: absolute;
  bottom: 1vw;
  left: 10vw;
  cursor: pointer;
  opacity: 0.4;
}

.mainSlider:hover .slideBtn {
  transition: all 0.5s ease;
}

.mainSlider:hover .btnPlayPause {
  opacity: 0.9;
  transition: all 0.5s ease;
}

.btnLeft {
  left: 10%;
}
.btnRight {
  right: 10%;
}
.bubbleBox {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  justify-content: center;
}
.bubble_default {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 2px;
  cursor: pointer;
}
.activeBubble {
  border: 2px black solid;
}
.unactiveBubble {
  border: 2px gray solid;
}
.noclick {
  pointer-events: none;
}
.noOverflow {
  overflow: hidden;
  position: relative;
  transition: all var(--transition-duration) ease;
}

.arrow_defCSS {
  transform: rotate(135deg);
  position: relative;
  border: solid white;
  border-width: 0 6px 6px 0;
  padding: 10px;
  border-radius: 3px;
}
.arrRight {
  transform: rotate(-45deg);
}
.pause_defCSS {
  position: relative;
  display: flex;
}
.pause_defCSS span {
  width: 12px;
  height: 32px;
  margin: 0 2px;
  border-radius: 4px;
  background-color: white;
}
.play_defCSS {
  height: 0;
  width: 0;
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  border-left: 32px solid white;
  /* border-radius: 4px; */
}
</style>
