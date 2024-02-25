<template>
  <section class="tuto">
    <Slideshow
      sliderheight="very_auto"
      slidewidth="90"
      slidespeed="500"
      bubbles="number"
      activeclass="actSlide"
    >
      <div class="my-slide slideA">
        <div>
          <div>
            <h1>Diaporama</h1>
            <h2>Un composant vuejs facile à utiliser et paramétrable</h2>
            <p>Il posséde les évènenents tactiles et ceux des fleches ← gauche et droite →</p>
            <p>La barre d'espace pour mettre en pause / redémarrer le défilement automatique</p>
            <p>
              Vous pouvez télécharger le composant puis le réutiliser dans vos applications
              vue js en le téléchargant ci dessous
            </p>

            <div class="btnsSLA">
              <a href="/Slideshow.min.zip" download>SlideShow.min.vue</a>
              <a href="/Slideshow.zip" download>SlideShow.vue</a>
            </div>
          </div>
        </div>
      </div>
      <div class="my-slide">
        <div>
          <div>
            <h3>1 . Pour commencer</h3>

            <h5>Importez et déclarez le composant :</h5>
            <p>
              import Slideshow from "@/components/Slideshow.vue";
              <br />...
              <br />export default {
              <br />
              <br />&nbsp;&nbsp;components: {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;Slideshow
              <br />&nbsp;&nbsp; }
              <br />}
            </p>
          </div>
        </div>
      </div>

      <div class="my-slide">
        <div>
          <div>
            <h3>2. Créer le diaporama</h3>

            <textarea rows="15">
                 <Slideshow>
                    <!-- Ne mettez pas les img à la racine du composant. Mettez chaque img dans une <div> ou <a> ou autre   -->
                   <div>
                     <img src="" alt="">
                   </div>
                   <a href="">
                     <img src="" alt="">
                   </a>
                 </Slideshow>
            </textarea>
          </div>
        </div>
      </div>

      <div class="my-slide">
        <div>
          <div>
            <h3>3. Parametrer le diaporama</h3>
            <textarea rows="23">
            <Slideshow
                slidespeed="500"        ---//>vitesse défilement animation slide ,default 500
                timeslide="5100"        ---//> un nbre de ms. Si non fournis pas de défilement auto ,default pas fournis
                sliderheight="450px"  --- //> un nbre avec sa valeur (px, vh,%,...), default 450px . 
                        ||==//>Si "very_auto" s'adapte à la taille de chaque img avec un maximun à 100% window.innerHeight DONNER AUX IMGS LE CSS  OBJECT-FIT : CONTAIN 
                        ||==//>Peut avoir la valeur css "auto" avec image en 'contain', le diaporama fait alors la hauteur de la plus grande slide
                
                slidewidth="100"        ---//> un nbre en %  SANS sa valeur 
                unactiveclass="blackWhite"---//> une classe pour les images non active
                activeclass=""               ---//>  une classe pour l'image active
                bubbles='nomclass'     ---//> nom de classe pour navigations par bulles. 
                        ||==//>Par default desactivé, 
                        ||==//>si 'true'  un css de base est fournis
                        ||==//>si 'number'  les bulles contiennes le numéro de slide
                leftnav_class=""                ---//>  class pour l'élément btn gauche
                rightnav_class=""              ---//>  class pour l'élément  btn droite
                playbtn=""                        ---//>  class pour l'élément div btn play
                pausebtn=""                     ---//>  class pour l'élément div btn pause       
             >...</Slideshow>
          </textarea>
          </div>
        </div>
      </div>

      <div class="my-slide">
        <div>
          <div>
            <h3>Les bulles</h3>

            <p>le paramètre bubble à plusieurs options par défault :</p>
            <p>
              <b>'true' :</b>donne un css de base pour les bulles des rond gris et noir avec un css facile à surcaster
              <br />vous pouvez manipuler les classes
              <b>.bubble_default, .activeBubble</b>
              et
              <b>.unactiveBubble</b>
              <br />et la position du container 'bubbleBox'
            </p>

            <p>
              <b>'number' :</b>Montre le numéro de la slide
              <br />vous pouvez aussi manipuler les classes
              <br />et la position du container
            </p>

            <p>
              <b>'votre_nom_de_classe' :</b>
              <br />travailler le résultat avec votre classe personalisée
            </p>
          </div>
        </div>
      </div>
      <div class="my-slide">
        <div>
          <div>
            <h3>Les fleches de navigation et les icones play / pause</h3>
            <p>
              <b>leftnav_class</b> ---//> class pour l'élément btn gauche
              <br />
              <b>rightnav_class</b> ---//> class pour l'élément btn droite
              <br />
              <b>playbtn</b> ---//> class pour l'élément div btn play
              <br />
              <b>pausebtn</b> ---//> class pour l'élément div btn pause
              <br />Ces classes peuvent être une classe font-awesome ou une classe avec un background-image : url()
              <br />Du css par default est fournis
              <br />si vous ne fournissez que playbtn="" ou playbtn="unCssInexistant" le
              <b>bouton n'apparaitra pas !</b>
            </p>
            <p>
              Vous pouvez surcaster les classes
              <b>.slideBtn</b> et
              <b>.btnRight</b> pour ajuster le positionnement des fléches,
              <br />Pour les btns play et pause:
              <b>.btnPlayPause .pause_defCSS</b> et
              <b>.play_defCSS</b>
              <br />
            </p>
          </div>
        </div>
      </div>

      <div class="my-slide">
        <div>
          <div>
            <h3>Les classes active et unactive</h3>
            <p>
              <b>activeclass</b> ---//> class pour la slide active (à définir)
              <br />
              <b>unactiveclass</b> ---//> class pour tous les éléments non actifs (à définir)
              <br />
              <b>before</b> et
              <b>after</b> ---//> par défault chaque slide possède une classe before ou after selon
              leur position par rapport à la slide active
              <br />
              <b>bef1, bef2 , aft1, aft2</b> ---//> par défault, ces classes sont données à chaques slides selon leur position permettant de jouer sur le style de slide éloignées
            </p>
          </div>
        </div>
      </div>
    </Slideshow>
  </section>
</template>

<script>
import Slideshow from "@/components/Slideshow.vue";

export default {
  // module.exports = {
  name: "TutoSlideshow",
  components: {
    Slideshow,
  },
  data: function () {
    return {};
  },
  props: {},
  computed: {},

  created: function () {},
  mounted: function () {
    this.$nextTick(() => {});
  },
  methods: {},
};
</script>

<style>
.tuto {
  margin-top: 3rem;
  color: black;
  margin-bottom: 2rem;
}
.tuto .arrow_defCSS {
  border-color: #000;
}
.tuto h1 {
  text-align: center;
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
}

.tuto .noOverflow {
}
.tuto .my-slide {
  height: 100%;
  /* background: rgba(4, 66, 61, 0.2); */
}
.imageContainer .my-slide > * {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.imageContainer .my-slide > * > * {
  /* margin: 0 2%; */
  /* background: #fff5; */
  background: #fff;
  padding: 2%;
  max-height: 80%;
  box-shadow: 0 0 28px 3px #efefef, 0 0 20px 23px #efefef55;
  width: 72%;
  /* border: 2px black solid; */
}
.tuto .my-slide textarea {
  background: whitesmoke;
  width: 80%;
  margin: 8px;
  padding: 8px;
  border: none;
  overflow: auto;
  outline: none;
}

.tuto .bubbleBox {
  align-items: flex-end;
  right: 10%;
  left: unset;
  cursor: pointer;
}
.tuto .number {
  border: none;
  font-size: 2rem;
  color: black;
  margin: 0 4px;
  text-shadow: 2px 2px 8px #bbb;
}
.tuto .activeBubble {
  font-size: 3rem;
}
.tuto h3 {
  font-size: 2rem;
}
</style>
