<template>
  <div class="pagePhoto pagePhotoDetail" :class="!$store.state.darkmode ? 'clear' : null ">
        <BlobPhoto v-if="$store.state.darkmode" /> 
        
        <p v-if="$store.state.darkmode" class="btnDarkmode" @click="$store.commit('toggleBoolean', 'darkmode')">Light</p>
        <p v-else class="btnDarkmode" @click="$store.commit('toggleBoolean', 'darkmode')">Dark</p>

        <nuxt-link to="/photographie"  class="btnDarkmode btnBack"  >Retour à l'accueil </nuxt-link>

        <section>

            <div class="head_det">
                <div class="head_img">
                    <img :src="data.img" :alt='data.title' />
                </div>
                <div class="head_content ppHead">
                     <h1> {{ data.title }} </h1>
                     <p> {{ data.description }} </p>
                     <span> {{ data.listing_imgs.length }} images</span>
                </div>
            </div>

            <div>
                <TuilePhotographie  
                    v-for="(i, index) in  data.listing_imgs" :key="index"  
                    :img="i.img"
                    :desc="i.desc"
                    :class="index % 2 == 0 ? 'imgOnRight' : null"
                ></TuilePhotographie>
            </div>

            <div class="footer_det">
                <div class="ppHead">
                    <h1>Photographies</h1>
                    <h2>Raphaël Mouly</h2>
                    <!-- <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at commodo tortor, sit amet congue ligula. Fusce cursus tristique dui, 
                        ac laoreet ante luctus vestibulum. Praesent semper odio eros, vel tincidunt lacus tristique a. Vestibulum sit amet consequat sem. 
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    </p> -->
                </div>
                <nav>
                    <nuxt-link to='/photographie'>Toutes les catégories</nuxt-link>
                    <!-- <a class="" v-for="(i, index) in cats" :key="index">/ {{ i.title }} </a> -->
                    <span v-for="(i, index) in cats" :key="index">&nbsp;/&nbsp;
                        <nuxt-link :to='`/photographie/${rewriteForUrl(i.title)}`' >{{ i.title }}</nuxt-link>  
                    </span>
                </nav>

            </div>
        </section>
    </div>
</template>

<script>
const photos = require('/photographies')
const site = require('/site')
import utils from '~/mixin/utils.vue'
import seo from '~/mixin/seo.vue'

export default {
    name: "PhotographieDetail",
    mixins:[utils, seo],
	transition: { name: 'home', mode: 'in-out' },
    data() {
        return {
            data: {},
            cats: []
        };
    }, 
     mounted(){
        this.cats = photos.data 
        console.log(this.$route);
    },
    async fetch(){
        let position = photos.data.findIndex((el) => this.rewriteForUrl(el.title) === this.$route.params.slug )
        if (position != -1 ) {
            this.data = photos.data[position]
        }
    },
    head() {
        return this.setSEO({ 
            description : this.data.description, 
            img : site.url + this.data.img, 
            title : this.data.title + ' - Photographie - Raphaël Mouly', 
            path : site.url + this.$route.fullPath 
        })
    }
}
</script>

<style >
@import '~/assets/css/photographies.css';
.pagePhotoDetail > section {
    z-index: 2;
    min-height: 100vh;
}
.pagePhotoDetail .tilePhoto  {
    margin: 6rem auto;
}
.pagePhotoDetail .tilePhoto img {
    object-fit: contain;
    max-height: 90vh;
} 
.head_det {
    padding: 4em 2em 2em;
    display: flex;
    align-items: flex-start;
}
.head_img {
    flex: 2;
}
.head_img img {
    width: 100%;
    transition: all .5s; 
}
.head_content.ppHead {
    flex: 1;
    margin-left: 0;
    padding: 3em;
}
.head_content.ppHead p {
    text-transform: uppercase;font-size: 3rem;
    margin-top: 0;
}

.pagePhotoDetail .btnDarkmode {
    left: unset;
    right: 15px;
    top: 5px;
    z-index: 4;
}
.pagePhotoDetail .btnBack {
    right: 80px;
    top: 21px;
}
.footer_det {
    display: flex;
    padding-bottom: 2rem;
}
.footer_det nav {
    margin: 1em 5%;
}
.footer_det a {
    color: #ccc;
    font-weight: 100;
    font-size: 1.2rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: .5s ease;
}
.footer_det .nuxt-link-exact-active,
.footer_det a:hover {
    color: rgb(179, 36, 36);
}
.clear .footer_det a {
    color: #333;
}

@media all and (max-width: 1200px){
    .head_det {
        padding: 0;
        flex-direction: column;
    }
    .head_img {
        width: 100%;
        flex: unset;
    }
    .pagePhotoDetail .tilePhoto {
        margin: 2rem auto;
    }
    
}

@media all and (max-width: 1000px){
    .footer_det {
        flex-direction: column;
    }
}
@media all and (max-width: 500px){
    .head_content.ppHead p {
        font-size: 2rem;
    }
}
</style>