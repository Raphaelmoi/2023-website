<template>
    <div class="pagePhoto" :class="!$store.state.darkmode ? 'clear' : null ">
        <BlobPhoto v-if="$store.state.darkmode" /> 

        <p v-if="$store.state.darkmode" class="btnDarkmode" @click="$store.commit('toggleBoolean', 'darkmode')">Light</p>
        <p v-else class="btnDarkmode" @click="$store.commit('toggleBoolean', 'darkmode')">Dark</p>

        <aside>
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
                <nuxt-link to='/' style="color:var(--red); font-weight:bold">Retour Accueil</nuxt-link>
                <span v-for="(i, index) in cats" :key="index">&nbsp;/&nbsp;
                    <a @click="scrolltoId(i.title)">{{ i.title }}</a>    
                </span>
            </nav>

        </aside>
        <section>
            <div class="emptyblock" style=""></div>
            <TuilePhotographie  
                v-for="(i, index) in cats" :key="index" :id="i.title" 
                :titre='i.title'
                :img="i.img"
            ></TuilePhotographie>
        </section>

    </div>
</template>

<script>
const site = require('/site')
const photos = require('/photographies')
import seo from '~/mixin/seo.vue'

export default {
    name: "Photographie", 
    mixins:[seo],
	transition: { name: 'home', mode: 'in-out' },

    data() {
        return {
            cats: []
        };
    },
    async fetch(){
        this.cats = photos.data 
    },
   
    methods:{
        scrolltoId(id){
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            });
        }
    },
    head() {
        return this.setSEO({ 
            description : 'Toutes mes photographies', 
            img : site.social_img, 
            title : 'Photographies - Raphaël Mouly', 
            path : site.url  
        })
    }
}
</script>

<style scoped>
@import '~/assets/css/photographies.css';
</style>