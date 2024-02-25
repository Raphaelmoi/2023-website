<template>
  <section class="paginator">
    <router-link to="/" class="btn_backHome">
      <i class="fas fa-arrow-left"></i> Accueil
    </router-link>
    <div>
      <div class="head">
        <h1>Pagination</h1>

        <p>
          Un composant vuejs pour la pagination assez, simple à intégrer et
          possédant quelques options :
        </p>
        <p>Le css est facile à surcaster ...</p>
        <div class="btnsSLA">
          <a href="/Pagination.zip" download
            >Télécharger Pagination.vue</a
          >
        </div>
      </div>
      <textarea rows="7">
            <Pagination>
                <div>a</div>
                <div>b</div>
                <div>c</div>
            </Pagination>
      </textarea>
      <br />
      <br />
      <textarea rows="15">
        <Pagination
            pag_color1          ==//> color theme for border and background of case
            pag_color2          ==//>  text and icons colors
            multiple_page     ==//>  default is 10 -> give a multiple of number of  page when clicking on the 3 dots
            items_by_page    ==//>  default is 12 -> nbr items by page
                    -> give the name on option and  create css on your file 
            other_style          ==//> for changing the style of the rendering. 
                    -> Simply add a class name and you will have a mecanism for toggleling this class
            show_qtt             ==//> show qtt of seen items,
            show_top_nav    ==//> show a top nav system
            >
            </Pagination>
        </textarea
      >
    </div>

    <client-only>
      <div class="pagiBox">
        <Pagination
          multiple_page="3"
          items_by_page="5"
          pag_color1="cornflowerblue"
          pag_color2="black"
          other_style="vlock"
          show_qtt
          show_top_nav
        >
          <div>1a</div>
          <div>b2</div>
          <div>c3</div>
          <div>d4</div>
          <div>5e</div>
          <div>f6</div>
          <div>g7</div>
          <div>a8</div>
          <div>b9</div>
          <div>c10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div>21</div>
          <div>a22</div>
          <div>b23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>f</div>
          <div>g</div>
          <div>a1</div>
          <div>b1</div>
          <div>c1</div>
          <div>d1</div>
          <div>e1</div>
          <div>f1</div>
          <div>g1</div>
          <div>a2</div>
          <div>b2</div>
          <div>c2</div>
          <div>d2</div>
          <div>e2</div>
          <div>f2</div>
          <div>g2</div>
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
          <div>f</div>
          <div>g</div>
          <div>a1</div>
          <div>b1</div>
          <div>c1</div>
          <div>d1</div>
          <div>e1</div>
          <div>f1</div>
          <div>g1</div>
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
          <div>f</div>
          <div>g</div>
          <div>a1</div>
          <div>b1</div>
          <div>c1</div>
          <div>d1</div>
          <div>e1</div>
          <div>f1</div>
          <div>g1</div>
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
          <div>f</div>
          <div>g</div>
          <div>a1</div>
          <div>b1</div>
          <div>c1</div>
          <div>d1</div>
          <div>e1</div>
          <div>f1</div>
          <div>g1</div>
          <div>a2</div>
          <div>b2</div>
          <div>c2</div>
          <div>d2</div>
          <div>e2</div>
          <div>f2</div>
          <div>g2</div>
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
          <div>f</div>
          <div>g</div>
          <div>a1</div>
          <div>b1</div>
          <div>c1</div>
          <div>d1</div>
          <div>e1</div>
          <div>f1</div>
          <div>g1</div>
          <div>a2</div>
          <div>b2</div>
          <div>c2</div>
          <div>d2</div>
          <div>e2</div>
          <div>f2</div>
          <div>g2</div>
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
          <div>f</div>
          <div>g</div>
          <div>a1</div>
          <div>b1</div>
          <div>c1</div>
          <div>d1</div>
          <div>e1</div>
          <div>f1</div>
          <div>g1</div>
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
          <div>f</div>
          <div>g</div>
          <div>a1</div>
          <div>b1</div>
          <div>c1</div>
          <div>d1</div>
          <div>e1</div>
          <div>f1</div>
          <div>g1</div>
          <div>DERNIER</div>
        </Pagination>
      </div>
    </client-only>

    <div>
      <h3>Le code :</h3>
      <textarea rows="10">
          <Pagination
            multiple_page="0"
            items_by_page="6"
            pag_color1="cornflowerblue"
            pag_color2="black"
            other_style="vlock"
            show_qtt
          >
          <div>a</div>
          <div>b</div>
          <div>c</div>
          </Pagination>
      </textarea>
    </div>
    <br />
    <br />
    <br />
  </section>
</template>

<script>
const site = require('/site')
import seo from '~/mixin/seo.vue'
export default {
  name: "Paginator",
  mixins:[seo],
	transition: { name: 'home', mode: 'in-out' },
  data: function () {
    return {
      showCodeP: 1,
    };
  },
  head() {
        return this.setSEO({ 
            description : 'Composant VueJS pour les diaporamas', 
            img : site.social_img, 
            title : 'Diaporama - Raphaël Mouly', 
            path : site.url  
        })
    }
};
</script>

<style >
.paginator {
  color: black;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
}
.paginator textarea {
  width: 60%;
  margin-left: 20%;
  font-family: inherit;
  border: 0;
  /* background: rgba(255, 255, 255, 0.5); */
  background: #333;
  color: #efefef;
  font-size: 1rem;
  padding-top: 1%;
  font-family: Quicksand;
}
.paginator .head {
  font-size: 1.5rem;
}
.paginator .head h1 {
  font-size: 2.2rem;
}
.slot_container {
  display: flex;
  flex-wrap: wrap;
}
.pagiBox .slot_container div {
  background: teal;
  margin: 1%;
  padding: 1%;
  width: 29%;
  height: 180px;
  transition: opacity 1s ease-out;
  font-size: 3rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagiBox .slot_container div:nth-child(odd) {
  background: cornflowerblue;
}

.vlock.slot_container div {
  display: flex;
  width: 100%;
  text-align: center;
  height: 50px;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
}
.head {
  margin: 3% 5%;
}
.head h1 {
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
}

.blobs {
  position: fixed;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter {
  opacity: 0;
  transform: scale(0);
}
.list-leave-to {
  display: none;
}
</style>
