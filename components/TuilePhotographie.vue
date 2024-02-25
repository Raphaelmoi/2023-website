<template>
  <nuxt-link :to='`/photographie/${rewriteForUrl(titre)}`' class="tilePhoto" v-if="titre" :style="`width:${zoom}%;`"  >
    <img :src="img" :alt='titre || desc' />
    <div v-if="titre">
        <p class="tileTitle">{{ titre }}</p>
        <p class="voirPlus">Voir +  </p>
    </div>
  </nuxt-link>
  <div v-else class="tilePhoto tileNotLink">
    <img :src="img" />
    <div v-if="desc">
        <p class="tileDesc">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
import utils from '~/mixin/utils.vue'
export default {
  name: "TuilePhotographie",
  props: ["titre", "img", "desc"],
  mixins:[utils],
  data() {
    return {
      isVisible: false,
      scrollDirection: 'down',
      lastScrollPosition: 0,
      zoom: 80,
    }
  },

  beforeMount() {
    if (window.innerWidth > 1000) {
      window.addEventListener("wheel", this.handleScroll);
      window.addEventListener("scroll", this.handleScroll);
      this.handleScroll
    }
  },

  methods: {
    isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      const screenHeight =  (window.innerHeight || document.documentElement.clientHeight)

      return (
        rect.top > 0 - rect.height  &&
        rect.bottom < screenHeight + rect.height
      );  
    },
    handleScroll(){
      if(this.lastScrollPosition < document.documentElement.scrollTop){
        this.scrollDirection = 'down'
      } else this.scrollDirection = 'up'
      this.lastScrollPosition = document.documentElement.scrollTop;

      const isV = this.isElementInViewport(this.$el)
      let t = this.$el.getBoundingClientRect().top + Math.round(this.$el.getBoundingClientRect().height*.5)  
      t = t  - Math.round(window.innerHeight*.5) 
      t = Math.round(Math.abs(t)*100)/100/100
      if(isV &&  this.zoom <= 80) {
        // console.log(t);

        this.isVisible = true
        // this.zoom = 80-t         
        this.zoom = 70+t         
        // this.$el.classList.add('visibletile')
        // this.$el.classList.add(this.scrollDirection)
      }
     
      else if(!isV && this.zoom > 70){
        this.isVisible = false
        this.zoom--
              // this.$el.classList.remove('visibletile')
          // this.$el.classList.remove(this.scrollDirection)

      }
    },
    // handleScroll(){
    //   if(this.lastScrollPosition < document.documentElement.scrollTop){
    //     this.scrollDirection = 'down'
    //   } else this.scrollDirection = 'up'
    //   this.lastScrollPosition = document.documentElement.scrollTop;

    //   const isV = this.isElementInViewport(this.$el)
    //   if(isV && !this.isVisible){
    //     this.isVisible = true

    //     this.$el.classList.add('visibletile')
    //     this.$el.classList.add(this.scrollDirection)
    //   }
    //   else if(!isV && this.isVisible){
    //       this.isVisible = false

    //       this.$el.classList.remove('visibletile')
    //       this.$el.classList.remove(this.scrollDirection)

    //   }
    // },
  },
};
</script>

<style>
 .tilePhoto {
    display: block;
    position: relative;
    width: 80%;
    max-width: 1000px;
    margin: 4rem auto;
    max-height: 100vh;
    cursor: pointer;
    overflow: hidden;
  }
  .tilePhoto.tileNotLink {
    overflow: visible;
    padding-right: 260px;
    width: calc( 80% - 260px);
    cursor: auto;
  }
  .tilePhoto.tileNotLink.imgOnRight {
    padding-right: 0;
    padding-left: 260px;
  }
  .tilePhoto.visibletile.down {
    opacity: 0.5;
    transform: translateY(40px);
    animation: tuileScrollDown 1s ease forwards;
  }
  .tilePhoto.visibletile.up {
    opacity: 0.5;
    transform: translateY(-40px);
    animation: tuileScrollDown 1s ease forwards;
  }
  @keyframes tuileScrollDown {
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  /* .tilePhoto:hover > img {
      transform: scale(1.02);
  } */
  a.tilePhoto:hover > img {
      filter: brightness(0.8);
  }
 .tilePhoto img {
    width: 100%;
    display: block;
    height: 100%;
    max-height: 100vh;
    object-fit: cover;
    transition: .5s ease;
}
 .tilePhoto > div {
    position: absolute;
    top: 0;
    left: 0; 
    right: 0; 
    bottom: 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: .5s ease;
}
 .tilePhoto .tileTitle {
    transition: .5s ease;
    font-size: 5rem; 
    text-transform: uppercase;
    opacity: 0.5;
    animation: textanim 1s ease ;
    color: white;
    text-align: center;
    position: relative;
    padding: 0 1em;
    margin: 0;
    width: calc(100% - 2em);
}
 .tilePhoto .tileTitle::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 50%;
    height: 2px;
    background: #fff;
    transition: .5s ease;
}
 .tilePhoto:hover .tileTitle {
    opacity: 1;
}
 .tilePhoto:hover .tileTitle::before {
    right: 10%;
    left: 10%;
}
.tilePhoto .voirPlus {
  font-size: 2rem;
  font-family: 'Quicksand';
  margin: 1em 0 0;
  letter-spacing: 3px;
  color: var(--red);
  opacity: 0;
  transition: .5s ease;
}
 .tilePhoto:hover .voirPlus {
    opacity: 1;
    transform: translateY(100%);
 }
.tileDesc {
  padding: 10px 20px;
  background: white;
  font-family: 'Quicksand';
  color: #111;
  width: 200px;
  position: absolute;
  bottom: 100px;
  right: -9px;
  font-size: 1.5rem;
  letter-spacing: 2px;
}
.clear .tileDesc {
  background: #151515;
  color: #eee;
}
.imgOnRight .tileDesc {
  right: unset;
  left: -9px;
}
.tilePhoto.visibletile .tileDesc {
  opacity: 0.5;
  transform: translateX(-80px);
  animation: textanim 1s ease .5s forwards ;
}
.imgOnRight.tilePhoto.visibletile .tileDesc {
  transform: translateX(80px);
}
@keyframes textanim {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@media all and (max-width: 1200px){
  .tilePhoto.tileNotLink {
      /* padding-right: 160px; */
      width: calc( 90% - 260px);
  }
}

@media all and (max-width: 1000px){
  .tilePhoto .voirPlus {
    opacity: 1;
    margin: 0 0 0 1rem;
  }
 .tilePhoto .tileTitle {
   opacity: 1;
   font-size: 2em;
    width: auto;
 }
 .tilePhoto > div {
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   background: #15151577;
   top: unset;
  }
  .tilePhoto.tileNotLink {
      padding-right: 0px;
      width: 95%;
  }
  .tilePhoto.tileNotLink.imgOnRight {
    padding-left: 0;
  }
  .tileDesc {
    margin: 0;
    padding: 10px 20px;
    bottom: 0;
    right: 0;
  }
  .imgOnRight .tileDesc {
    left: 0;
  }
}
@media all and (max-width: 768px){
  .tilePhoto {
      width: 95% !important;
      margin: 2rem auto;
  }
  .tileDesc {
    padding: 10px ;
    width: auto;
    font-size: 1rem;
    letter-spacing: 2px;
  }
}
@media all and (max-width: 500px){
  .tilePhoto .tileTitle {
    font-size: 1.5em;
    flex: 1;
  }
  .tilePhoto .voirPlus {
    font-size: 1.5rem;
  }
}
</style>
