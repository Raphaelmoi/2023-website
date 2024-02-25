<template>
  <section class="mainContainer">
    <router-link to="/" class="btn_backHome">
      <i class="fas fa-arrow-left"></i> Accueil
    </router-link>
    <client-only>
      <TutoSlideshow></TutoSlideshow>
    </client-only>
    <!-- <div style="height:100vh; width:100%"></div> -->

    <!--  DIAPO 0 -->
    <!--  DIAPO 0 -->
    <div class="firstDiapo">
      <client-only>
        <Slideshow
          sliderheight="60vh"
          slidewidth="20"
          unactiveclass="blackWhite"
          bubbles="true"
          rightnav_class="fas fa-angle-double-right fa-4x"
          leftnav_class="fas fa-angle-double-left fa-4x"
        >
          <a>
            <img src="/img/photographies/TOP/top002.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top003.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top004.jpg" />
          </a>
          <a>
            <img src="/img/photographies/ECOSSE/ecosse007.jpg" />
          </a> </Slideshow
      ></client-only>
    </div>
    <div class="codeBox" @click.self="showCode1 = !showCode1">
      <h3 @click="showCode1 = !showCode1">
        <span>Code html/css du diapo :</span>
        <span>
          <i
            class="fas fa-angle-right"
            :class="showCode1 ? 'rotateDown' : ''"
          ></i>
        </span>
      </h3>
      <div v-if="showCode1">
        <div>
          <p>html :</p>
          <textarea disabled>
          <div class="firstDiapo">
            <Slideshow
              sliderheight="60vh"
              slidewidth="20"
              unactiveclass="blackWhite"
              bubbles="true"
              slidespeed="400"
              rightnav_class="fas fa-angle-double-right fa-4x"
              leftnav_class="fas fa-angle-double-left fa-4x"
            >
              <a>
                <img src="/img/photographies/TOP/top002.jpg" />
              </a>
              <a>
                <img src="/img/photographies/TOP/top003.jpg" />
              </a>
              <a>
                <img src="/img/photographies/TOP/top004.jpg" />
              </a>
              <a>
                <img src="/img/photographies/ECOSSE/ecosse007.jpg" />
              </a>
            </Slideshow>
          </div>
      </textarea
          >
        </div>
        <div>
          <p>css</p>
          <textarea disabled>
              .firstDiapo .imageContainer > * {
                padding: 10px;
              }
              .firstDiapo .blackWhite {
                filter: grayscale(1);
              }
              .firstDiapo .aft1 {
                transform: perspective(900px) rotateY(10deg) scale(0.94);
                filter: grayscale(0.8) saturate(0.4);
              }
              .firstDiapo .bef1 {
                transform: perspective(900px) rotateY(-10deg) scale(0.94);
                filter: grayscale(0.8) saturate(0.6);
              }
              .firstDiapo .aft2 {
                transform: perspective(900px) rotateY(-10deg) scale(0.94) translateX(-15%);
              }
              .firstDiapo .bef2 {
                transform: perspective(900px) rotateY(10deg) scale(0.94) translateX(15%);
              }
              .firstDiapo i {
                color: black;
                background: white;
                padding: 8px;
                border-radius: 50%;
              }
              .firstDiapo i:hover {
                color: white;
                background: black;
              }
            </textarea
          >
        </div>
      </div>
    </div>
    <!--  DIAPO 1 -->
    <!--  DIAPO 1 -->
    <div class="classicDiapo">
      <client-only>
        <Slideshow
          slidespeed="500"
          sliderheight="60vh"
          slidewidth="40"
          unactiveclass="fade"
          timeslide="3000"
          bubbles="number"
          playbtn="fa fa-play fa-3x"
          pausebtn="fa fa-pause fa-3x"
        >
          <a>
            <img src="/img/photographies/TOP/top002.jpg" />
          </a>
          <div class="slideDiv">
            <div>Une slide avec du texte, un lien, ...</div>
          </div>
          <a>
            <img src="/img/photographies/ECOSSE/ecosse002.jpg" />
          </a>
          <a>
            <img src="/img/photographies/ECOSSE/ecosse005.jpg" />
          </a>
          <a>
            <img src="/img/photographies/ECOSSE/ecosse007.jpg" />
          </a>
          <a>
            <img src="/img/photographies/ECOSSE/ecosse004.jpg" />
          </a> </Slideshow
      ></client-only>
    </div>
    <!--  DIAPO 1 DESCRIPTION -->

    <div class="codeBox" @click.self="showCode2 = !showCode2">
      <h3 @click="showCode2 = !showCode2">
        <span>Code html/css du diapo :</span>
        <span>
          <i
            class="fas fa-angle-right"
            :class="showCode2 ? 'rotateDown' : ''"
          ></i>
        </span>
      </h3>
      <div v-if="showCode2">
        <div>
          <p>html :</p>
          <textarea disabled>
          <div class="classicDiapo">
            <Slideshow
              slidespeed="500"
              sliderheight="60vh"
              slidewidth="40"
              unactiveclass="fade"
              timeslide="3000"
              bubbles="number"
              playbtn="fa fa-play fa-3x"
              pausebtn="fa fa-pause fa-3x"
            >
              <a>
                <img src="/img/photographies/TOP/top002.jpg" />
              </a>
              <div class="slideDiv">
                <div>Une slide avec du texte, un lien, ...</div>
              </div>
              <a>
                <img src="/img/photographies/ECOSSE/ecosse002.jpg" />
              </a>
              <a>
                <img src="/img/photographies/ECOSSE/ecosse005.jpg" />
              </a>
              <a>
                <img src="/img/photographies/ECOSSE/ecosse007.jpg" />
              </a>
              <a>
                <img src="/img/photographies/ECOSSE/ecosse004.jpg" />
              </a>
            </Slideshow>
          </div>
      </textarea
          >
        </div>
        <div>
          <p>css</p>
          <textarea disabled>
          .classicDiapo {
            color: white;
          }
        .classicDiapo .bubbleBox {
            align-items: flex-end;
            right: 10%;
            left: unset;
            cursor: pointer;
          }
          .classicDiapo .number {
            border: none;
            font-size: 2rem;
            color: white;
            margin: 0 4px;
            text-shadow: 2px 2px 8px #444;
          }
          .classicDiapo .activeBubble {
            font-size: 3rem;
          }
          .fade {
            filter: opacity(0.6) contrast(0.7);
          }
      </textarea
          >
        </div>
      </div>
    </div>

    <!--  DIAPO 2 -->
    <!--  DIAPO 2 -->
    <div class="bottomupDiapo">
      <client-only>
        <Slideshow
          sliderheight="60vh"
          slidewidth="60"
          bubbles="pinkBubble"
          activeclass="activeSl"
          unactiveclass="unactiveSl"
          slidespeed="500"
          timeslide="4000"
        >
          <a>
            <img src="/img/photographies/TOP/top001.jpg" />
          </a>
          <div class="slideDiv">
            <div>Une slide avec du texte, un lien, ...</div>
          </div>
          <a>
            <img src="/img/photographies/TOP/top003.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top005.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top011.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top011.jpg" />
          </a> </Slideshow
      ></client-only>
    </div>
    <!--  DIAPO 2 DESCRIPTION -->
    <div class="codeBox" @click.self="showCode3 = !showCode3">
      <h3 @click="showCode3 = !showCode3">
        <span>Code html/css du diapo :</span>
        <span>
          <i
            class="fas fa-angle-right"
            :class="showCode3 ? 'rotateDown' : ''"
          ></i>
        </span>
      </h3>
      <div v-if="showCode3">
        <div>
          <p>html :</p>
          <textarea disabled>
        <div class="bottomupDiapo">
          <Slideshow
            sliderheight="60vh"
            slidewidth="60"
            bubbles="pinkBubble"
            activeclass="activeSl"
            unactiveclass="unactiveSl"
            slidespeed="500"
            timeslide="4000"
          >
            <a>
              <img src="/img/photographies/TOP/top001.jpg" />
            </a>
            <div class="slideDiv">
              <div>Une slide avec du texte, un lien, ...</div>
            </div>
            <a>
              <img src="/img/photographies/TOP/top003.jpg" />
            </a>
            <a>
              <img src="/img/photographies/TOP/top005.jpg" />
            </a>
            <a>
              <img src="/img/photographies/TOP/top011.jpg" />
            </a>
            <a>
              <img src="/img/photographies/TOP/top011.jpg" />
            </a>
          </Slideshow>
        </div>
      </textarea
          >
        </div>
        <div>
          <p>css</p>
          <textarea disabled>
              .bottomupDiapo {
                margin: 1rem 0;
              }
              .unactiveSl {
                transform: rotate(180deg);
              }
              .activeSl {
                transform: scale(0.7);
              }
              .pinkBubble {
                width: 14px;
                height: 14px;
                margin: 0 2px;
                cursor: pointer;
              }
              .bottomupDiapo .activeBubble {
                background: pink;
                border-color: pink;
              }
              .bottomupDiapo .unactiveBubble {
                border-color: pink;
              }
      </textarea
          >
        </div>
      </div>
    </div>
    <!--  DIAPO 3 -->
    <!--  DIAPO 3 -->
    <!--  DIAPO 3 -->
    <!--  DIAPO 3 -->
    <section class="smallDiapo tutotouch">
      <div style class="containerSD">
        <client-only>
          <Slideshow
            sliderheight="400px"
            slidewidth="100"
            slidespeed="500"
            bubbles="number"
            activeclass="activeSwipe"
          >
            <a href="/lien1" class="lienA">1</a>
            <a href="/lien2" class="lienB">2</a>
            <a href="/lien3" class="lienC">3</a>
            <a href="/lien4" class="lienD">4</a>
          </Slideshow></client-only
        >
      </div>
      <div class="TutoSwipe">
        <div class="touch">
          <span></span>
        </div>
        <i class="fas fa-hand-point-up"></i>
      </div>
      <div
        style="
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10;
        "
        onclick="this.parentElement.classList.remove('tutotouch')"
      ></div>
    </section>
    <!--  DIAPO 3 DESCRIPTION -->
    <div class="codeBox" @click.self="showCode4 = !showCode4">
      <h3 @click="showCode4 = !showCode4">
        <span>Code html/css du diapo :</span>
        <span>
          <i
            class="fas fa-angle-right"
            :class="showCode4 ? 'rotateDown' : ''"
          ></i>
        </span>
      </h3>
      <!-- <h3 @click.self="showCode4 =!showCode4">Code html/css du diapo :</h3> -->
      <div v-if="showCode4">
        <div>
          <p>html :</p>
          <textarea disabled>
          <section class="smallDiapo">
            <div style class="containerSD">
              <Slideshow sliderheight="400px" slidewidth="100" slidespeed="500">
                <a href="/lien1" class="lienA">1</a>
                <a href="/lien2" class="lienB">2</a>
                <a href="/lien3" class="lienC">3</a>
                <a href="/lien4" class="lienD">4</a>
              </Slideshow>
            </div>
                
          </section>
        </textarea
          >
        </div>
        <div>
          <p>css</p>
          <textarea disabled>
          .smallDiapo {
            background: #1c313a;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem 0;
            color: white;
          }
          .smallDiapo .btnLeft {
            left: -10%;
          }
          .smallDiapo .btnRight {
            right: -10%;
          }
          .containerSD {
            width: 600px;
            background: cornflowerblue;
            margin-top: 2rem;
          }
          .containerSD a {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
          }
          .lienA {
            background: tomato;
          }
          .lienB {
            background: gray;
          }
          .lienC {
            background: cornflowerblue;
          }
          .lienD {
            background: gold;
          }
        </textarea
          >
        </div>
      </div>
    </div>

    <!--  DIAPO 4 -->
    <!--  DIAPO 4 -->
    <!--  DIAPO 4 -->
    <!--  DIAPO 4 -->

    <div class="rectoVerso">
      <client-only>
        <Slideshow
          sliderheight="80vh"
          slidewidth="50"
          bubbles="true"
          unactiveclass="unac"
          activeclass="ac"
          slidespeed="500"
          timeslide="4000"
        >
          <a>
            <img src="/img/photographies/TOP/top001.jpg" />
          </a>
          <div class="slideDiv">
            <div>Une slide avec du texte, un lien, ...</div>
          </div>
          <a>
            <img src="/img/photographies/TOP/top003.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top005.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top011.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top011.jpg" />
          </a> </Slideshow
      ></client-only>
    </div>
    <!--  DIAPO 4 DESCRIPTION -->
    <div class="codeBox" @click.self="showCode5 = !showCode5">
      <h3 @click="showCode5 = !showCode5">
        <span>Code html/css du diapo :</span>
        <span>
          <i
            class="fas fa-angle-right"
            :class="showCode5 ? 'rotateDown' : ''"
          ></i>
        </span>
      </h3>
      <div v-if="showCode5">
        <div>
          <p>html :</p>
          <textarea disabled>
          <div class="rectoVerso">
            <Slideshow
              sliderheight="80vh"
              slidewidth="50"
              bubbles="true"
              unactiveclass="unac"
              activeclass="ac"
              slidespeed="500"
              timeslide="4000"
            >
              <a>
                <img src="/img/photographies/TOP/top001.jpg" />
              </a>
              <div class="slideDiv">
                <div>Une slide avec du texte, un lien, ...</div>
              </div>
              <a>
                <img src="/img/photographies/TOP/top003.jpg" />
              </a>
              <a>
                <img src="/img/photographies/TOP/top005.jpg" />
              </a>
              <a>
                <img src="/img/photographies/TOP/top011.jpg" />
              </a>
              <a>
                <img src="/img/photographies/TOP/top011.jpg" />
              </a>
            </Slideshow>
          </div>
        </textarea
          >
        </div>
        <div>
          <p>css</p>
          <textarea disabled>
            .rectoVerso {
              margin: 3rem 0;
              background: #000;
            }
            .rectoVerso .bubbleBox {
                z-index: 2;
              }
            .unac {
              transform: scale(0.4) perspective(600px) rotateY(180deg);
              box-shadow: 0px 0px 0px 10px gainsboro;
            }
            .ac {
              z-index: 2;
            }
        </textarea
          >
        </div>
      </div>
    </div>
    <!--  DIAPO 5 -->
    <!-- <section class="autoHeight">
      <h2>
        Diaporama responsive avec sliderheight="very_auto" et img
        object-fit:contain
      </h2>
      <client-only>
      <Slideshow sliderheight="very_auto" slidewidth="90" slidespeed="1000">
        <a href>
          <img
            src="https://www.photo-paysage.com/blog/wp-content/uploads/2018/02/cropped-rpin-bord-de-falaise-cap-canaille.jpg"
            alt
          />
        </a>
        <a>
          <img
            src="https://www.i4ce.org/wp-core/wp-content/uploads/2017/11/Panorama-novembre2017.jpg"
          />
        </a>
        <a href>
          <img src="/img/photographies/TOP/top045.jpg" alt />
        </a>
      </Slideshow></client-only>
    </section>
    <div class="codeBox" @click.self="showCode6 = !showCode6">
      <h3 @click="showCode6 = !showCode6">
        <span>Code html/css du diapo :</span>
        <span>
          <i
            class="fas fa-angle-right"
            :class="showCode6 ? 'rotateDown' : ''"
          ></i>
        </span>
      </h3>
      <div v-if="showCode6">
        <div>
          <p>html :</p>
          <textarea disabled>
              <section class="autoHeight">
              <Slideshow sliderheight="very_auto" slidewidth="100">
                <a>
                  <img
                    src="https://www.i4ce.org/wp-core/wp-content/uploads/2017/11/Panorama-novembre2017.jpg"
                  />
                </a>
              </Slideshow>
            </section>
        </textarea
          >
        </div>
        <div>
          <p>css</p>
          <textarea disabled>
           .autoHeight {
              margin: 100px 0 0;
            }
            .autoHeight .imageContainer > * > * {
              object-fit: contain;
            }
        </textarea
          >
        </div>
      </div>
    </div> -->

    <section class="rotateSlShow">
      <client-only>
        <Slideshow
          sliderheight="50vw"
          slidewidth="40"
          slidespeed="2000"
          activeclass="actSlide"
        >
          <a>
            <img src="/img/photographies/TOP/top013.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top025.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top011.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top031.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top047.jpg" />
          </a> </Slideshow
      ></client-only>
    </section>
    <!--  DIAPO 5 DESCRIPTION -->
    <div class="codeBox" @click.self="showCode7 = !showCode7">
      <h3 @click="showCode7 = !showCode7">
        <span>Code html/css du diapo :</span>
        <span>
          <i
            class="fas fa-angle-right"
            :class="showCode7 ? 'rotateDown' : ''"
          ></i>
        </span>
      </h3>
      <div v-if="showCode7">
        <div>
          <p>html :</p>
          <textarea disabled>
            <section class="rotateSlShow">
              <Slideshow sliderheight="50vw" slidewidth="40" slidespeed="2000" activeclass="actSlide">
                <a>
                  <img src="/img/photographies/TOP/top013.jpg" />
                </a>
                <a>
                  <img src="/img/photographies/TOP/top025.jpg" />
                </a>
                <a>
                  <img src="/img/photographies/TOP/top011.jpg" />
                </a>
                <a>
                  <img src="/img/photographies/TOP/top031.jpg" />
                </a>
                <a>
                  <img src="/img/photographies/TOP/top047.jpg" />
                </a>
              </Slideshow>
            </section>
        </textarea
          >
        </div>
        <div>
          <p>css</p>
          <textarea disabled>
        .rotateSlShow .before {
            transform: scale(0.7) rotate(-5deg);
          }
          .rotateSlShow .after {
            transform: scale(0.7) rotate(5deg);
          }
          .rotateSlShow .actSlide {
            z-index: 2;
            width: 200%;
            margin-left: -5%;
            margin-right: -3%;
          }
        </textarea
          >
        </div>
      </div>
    </div>

    <section class="onemore">
      <client-only>
        <Slideshow sliderheight="99vh" slidewidth="55" slidespeed="1000">
          <a>
            <img src="/img/photographies/TOP/top015.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top045.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top032.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top039.jpg" />
          </a>
          <a>
            <img src="/img/photographies/TOP/top006.jpg" />
          </a> </Slideshow
      ></client-only>

      <div class="codeBox" @click.self="showCode8 = !showCode8">
        <h3 @click="showCode8 = !showCode8">
          <span>Code html/css du diapo :</span>
          <span>
            <i
              class="fas fa-angle-right"
              :class="showCode8 ? 'rotateDown' : ''"
            ></i>
          </span>
        </h3>
        <div v-if="showCode8">
          <div>
            <p>html :</p>
            <textarea disabled>
              <Slideshow sliderheight="99vh" slidewidth="55" slidespeed="1000">
                <a>
                  <img src="/img/photographies/TOP/top015.jpg" />
                </a>
                <a>
                  <img src="/img/photographies/TOP/top045.jpg" />
                </a>
                <a>
                  <img src="/img/photographies/TOP/top032.jpg" />
                </a>
                <a>
                  <img src="/img/photographies/TOP/top039.jpg" />
                </a>
                <a>
                  <img src="/img/photographies/TOP/top006.jpg" />
                </a>
              </Slideshow>
        </textarea
            >
          </div>
          <div>
            <p>css</p>
            <textarea disabled>
                  .onemore {
                    margin-bottom: 1rem;
                  }
                  .onemore .imageContainer > * > * {
                    object-fit: contain;
                    filter: drop-shadow(0.5rem 0.5rem 0.8rem rgb(224, 191, 0));
                  }
                  .onemore .before {
                    transform: perspective(500px) rotateY(-10deg) scale(0.7);
                    transition: all 1500ms ease-in-out;
                  }
                  .onemore .after {
                    transform: scale(0.7) perspective(1000px) rotateY(10deg);
                    transition: all 1500ms ease-in-out;
                  }
        </textarea
            >
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
const site = require("/site");
import seo from "~/mixin/seo.vue";
export default {
  name: "Diaporama",
  mixins: [seo],
  transition: { name: "home", mode: "in-out" },
  data() {
    return {
      showCode1: false,
      showCode2: false,
      showCode3: false,
      showCode4: false,
      showCode5: false,
      showCode6: false,
      showCode7: false,
      showCode8: false
    };
  },
  //   mounted() {
  //     document.getElementsByClassName("blobs")[0].style.position = "fixed";
  //   },
  //   beforeDestroy() {
  //     document.getElementsByClassName("blobs")[0].style.position = "absolute";
  //   },
  head() {
    return this.setSEO({
      description: "Composant VueJS pour les diaporamas",
      img: site.social_img,
      title: "Diaporama - Raphaël Mouly",
      path: site.url
    });
  }
};
</script>

<style>
.TutoSwipe {
  display: none;
}
.tutotouch .TutoSwipe {
  display: block;
  position: absolute;
  width: 40%;
  left: 25%;
  top: 50%;
  z-index: 2;
  /* background: green; */
}
.tutotouch .TutoSwipe i {
  font-size: 7em;
  animation: swipe 2s ease infinite alternate;
  width: 100%;
}

.tutotouch .TutoSwipe .touch {
  position: absolute;
  top: -5px;
  left: 25px;
  width: 100%;
  height: 1px;
  /* background: #aaa; */
  transform: translateY(-50%);
  animation: touchanim 2s ease infinite alternate;
}
.tutotouch .TutoSwipe .touch span {
  width: 5px;
  height: 100%;
  border-radius: 50%;
  background: #0288d1;
  display: block;
  animation: finger 4s ease infinite;
  box-shadow: 0 0 0 0 #ffffff, 0 0 0 0 #c5d0d4, 0 0 0 0 #c9e0ec;
}
.tutotouch .activeSwipe {
  animation: goingWest 2s ease infinite alternate;
}
@keyframes finger {
  5% {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #fff, 0 0 0 6px #fff;
  }
  /* 10% {
    box-shadow: 0 0 0 10px #ced8dd, 0 0 0 15px #dceef7, 0 0 0 25px #ffffff;
  } */
  50% {
    box-shadow: 0 0 0 20px #ced8dd00, 0 0 0 45px #dceef700,
      0 0 0 170px #ffffff00;
  }
  51% {
    box-shadow: 0 0 0 0 #ffffff00, 0 0 0 0 #c5d0d400, 0 0 0 0 #dceef700;
  }
}
@keyframes swipe {
  from {
    transform: rotate(-5deg);
    opacity: 0.5;
  }
  to {
    transform: translate3d(100%, 0, 0) rotate(5deg);
    opacity: 1;
  }
}
@keyframes touchanim {
  from {
    transform: translate3d(0, -50%, 0) rotate(-8deg);
    opacity: 0.1;
  }
  to {
    transform: translate3d(100%, -50%, 0) rotate(0deg);
    opacity: 0.5;
  }
}
@keyframes goingWest {
  from {
    transform: rotate(-3deg) translateX(-10%);
  }
  to {
    transform: rotate(3deg) translateX(10%);
  }
}

.mainContainer {
  position: absolute;
  top: 0;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  font-family: "quicksand";
  font-variation-settings: "wdth" 400, "wght" 500;
}
.mainContainer header {
  color: black;
  padding: 2rem;
}
.slideDiv,
.slideDiv > * {
  background: cadetblue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}
.firstDiapo .imageContainer > * {
  padding: 10px;
}
.firstDiapo .blackWhite {
  filter: grayscale(1);
}
.firstDiapo .aft1 {
  transform: perspective(900px) rotateY(10deg) scale(0.94);
  filter: grayscale(0.8) saturate(0.4);
}
.firstDiapo .bef1 {
  transform: perspective(900px) rotateY(-10deg) scale(0.94);
  filter: grayscale(0.8) saturate(0.6);
}
.firstDiapo .aft2 {
  transform: perspective(900px) rotateY(-10deg) scale(0.94) translateX(-15%);
}
.firstDiapo .bef2 {
  transform: perspective(900px) rotateY(10deg) scale(0.94) translateX(15%);
}
.firstDiapo i {
  color: black;
  background: white;
  padding: 8px;
  border-radius: 50%;
}
.firstDiapo i:hover {
  color: white;
  background: black;
  padding: 8px;
  border-radius: 50%;
}
.classicDiapo {
  color: white;
}
.classicDiapo .bubbleBox {
  align-items: flex-end;
  right: 10%;
  left: unset;
  cursor: pointer;
}
.classicDiapo .number {
  border: none;
  font-size: 2rem;
  color: white;
  margin: 0 4px;
  text-shadow: 2px 2px 8px #444;
}
.classicDiapo .activeBubble {
  font-size: 3rem;
}

.fade {
  filter: opacity(0.6) contrast(0.7);
}

.bottomupDiapo {
  margin: 1rem 0;
}
.unactiveSl {
  transform: rotate(180deg);
}
.activeSl {
  transform: scale(0.7);
}
.pinkBubble {
  width: 14px;
  height: 14px;
  margin: 0 2px;
  cursor: pointer;
}
.bottomupDiapo .activeBubble {
  background: pink;
  border-color: pink;
}
.bottomupDiapo .unactiveBubble {
  border-color: pink;
}

.smallDiapo {
  background: #1c313a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  color: white;
  position: relative;
}
.smallDiapo .btnLeft {
  left: -10%;
}
.smallDiapo .btnRight {
  right: -10%;
}
.containerSD {
  width: 600px;
  background: cornflowerblue;
  margin-top: 2rem;
}
.containerSD a {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}
.lienA {
  background: tomato;
}
.lienB {
  background: gray;
}
.lienC {
  background: cornflowerblue;
}
.lienD {
  background: gold;
}

.rectoVerso {
  margin: 3rem 0;
  /* background: #000; */
}
.rectoVerso .bubbleBox {
  z-index: 2;
}
.unac {
  transform: scale(0.4) perspective(600px) rotateY(180deg);
  box-shadow: 0px 0px 0px 10px gainsboro;
}
.ac {
  z-index: 2;
}
.autoHeight {
  margin: 100px 0 0;
}
.autoHeight p,
.autoHeight h2 {
  color: #000;
  text-align: center;
}
.autoHeight .imageContainer > * > * {
  object-fit: contain;
}
.rotateSlShow .before {
  transform: scale(0.7) rotate(-5deg);
}
.rotateSlShow .after {
  transform: scale(0.7) rotate(5deg);
}
.rotateSlShow .actSlide {
  z-index: 2;
  width: 200%;
  margin-left: -3.25%;
  margin-right: -2%;
}
.onemore {
  margin-bottom: 1rem;
}
.onemore .imageContainer > * > * {
  object-fit: contain;
  filter: drop-shadow(0.5rem 0.5rem 0.8rem #444);
}
.onemore .before {
  transform: perspective(500px) rotateY(-10deg) scale(0.7);
  transition: all 1500ms ease-in-out;
}
.onemore .after {
  transform: scale(0.7) perspective(1000px) rotateY(10deg);
  transition: all 1500ms ease-in-out;
}
.codeBox {
  margin: 1rem 0;
  padding: 2rem 10%;
  background: #558da588;
  color: white;
  cursor: pointer;
}
.codeBox > div {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.codeBox > div > div {
  width: 49%;
  display: flex;
  flex-direction: column;
}
.codeBox textarea {
  width: 100%;
  font-family: inherit;
  border: 0;
  background: whitesmoke;
  color: black;
  font-size: 1rem;
  height: 400px;
}
.codeBox p {
  font-size: 1.5rem;
  display: block;
}
.codeBox h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  margin: 0;
}
.codeBox h3 i {
  font-size: 3rem;
  transition: 0.5s ease;
}
.rotateDown {
  transform: rotate(90deg);
}
</style>
