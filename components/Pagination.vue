<template>
  <!-- 
Pagination : 
  *Props better be String
    pag_color1          ==//> color theme for border and background of case
    pag_color2          ==//>  text and icone colors
    multiple_page     ==//>  default is 10 -> give a multiple of number of  page when clicking on the 3 dots
    items_by_page    ==//>  default is 12 -> nbr items by page
    animation_name ==//>  an animation if you want to filter items. Each items will have to be keyed because of <transition-group></transition-group> 
            -> give the name on option and  create css on your file 
    other_style          ==//> for changing the style of the rendering. 
            -> Simply add a class name and you will have a mecanism for toggleling this class
    show_qtt             ==//> show qtt of seen items,
    show_top_nav    ==//> show a top nav system
  -->

  <section id="pagination_container">
    <!-- AVANT NOUVELLE MODIF Head EST UNE COPIE PURE DE Bottom  -->
    <div class="navsystem Head" v-if="nbrOfPages > 1 && show_top_nav">
      <div class="caseBox">
        <!-- Button back to first page -->
        <!-- si le btn page 1 n'est pas visible et que l'on ne montre pas les dizaines  -->
        <div
          @click="
            navToPage(0);
            firstVisiblePage = 0;
          "
          title="Première page"
          :class="
            currentPage < multipleBase || showMultiple ? 'pag_disable' : ''
          "
        >
          <i class="arrow left"></i>
          <i class="arrow left"></i>
        </div>
        <!-- Page précedente -->
        <div
          @click="navToPage(currentPage - 1)"
          :class="currentPage === 0 || showMultiple ? 'pag_disable' : ''"
          title="page précédente"
        >
          <i class="arrow left"></i>
        </div>
        <!-- les pages par leur numéro -->
        <template v-if="!showMultiple">
          <div
            v-for="index in nbrOfPagesDynamic()"
            :key="index"
            @click="navToPage(index + firstVisiblePage - 1)"
            :class="
              index + firstVisiblePage - 1 === currentPage ? 'current_pag' : ''
            "
          >
            <i>{{ index + firstVisiblePage }}</i>
          </div>
        </template>
        <!-- les pages par dizaine -->
        <template v-else>
          <!-- because index start at 1 -->
          <div
            @click="
              navToPage(0);
              showMultiple = false;
              firstVisiblePage = 0;
            "
            :class="firstVisiblePage == 0 ? 'current_pag' : ''"
          >
            <i>1</i>
          </div>
          <div
            v-for="index in multipleOfPage()"
            @click="
              navToPage(index * multipleBase - 1);
              showMultiple = false;
              firstVisiblePage = index * multipleBase - 1;
            "
            :class="index * multipleBase == currentPage ? 'current_pag' : ''"
            :key="index"
          >
            <i>{{ index * multipleBase }}</i>
          </div>
        </template>
        <!-- les btns par dizaine (10,20...) -->
        <div
          @click="showMultiple = !showMultiple"
          v-if="nbrOfPages > multipleBase"
        >
          <i>...</i>
        </div>
        <!-- last page -->
        <div
          @click="
            navToPage(nbrOfPages - 1);
            setfirstVisiblePageForLastItem();
          "
          title="Dernière page"
          :class="isLastMultiple() || showMultiple ? 'pag_disableHID' : ''"
        >
          <i>{{ nbrOfPages }}</i>
        </div>

        <!-- Btn  page suivante -->
        <div
          @click="navToPage(currentPage + 1)"
          title="Page suivante"
          :class="
            currentPage + 1 === nbrOfPages || showMultiple ? 'pag_disable' : ''
          "
        >
          <i class="arrow right"></i>
        </div>
      </div>
      <!-- btns choix du  style du layout -->
      <div class="viewStyle" v-if="other_style">
        <i
          class="fas fa-th"
          @click="changeListingStyle(false)"
          :class="optionStyle == false ? 'activeStyle' : ''"
        ></i>
        <i
          class="fas fa-list"
          @click="changeListingStyle(true)"
          :class="optionStyle == true ? 'activeStyle' : ''"
        ></i>
      </div>
      <!-- show quantity -->
      <p v-if="show_qtt">
        <span>{{ seenItems() }} /</span>
        {{ itemsQuantity }}
      </p>
    </div>

    <!-- LES ITEMS A PAGINER -->
    <section class="slot_container">
      <slot></slot>
    </section>

    <div class="navsystem Bottom" v-if="nbrOfPages > 1">
      <div class="caseBox">
        <!-- Button back to first page -->
        <!-- si le btn page 1 n'est pas visible et que l'on ne montre pas les dizaines  -->
        <div
          @click="
            navToPage(0);
            firstVisiblePage = 0;
          "
          title="Première page"
          :class="
            currentPage < multipleBase || showMultiple ? 'pag_disable' : ''
          "
        >
          <i class="arrow left"></i>
          <i class="arrow left"></i>
        </div>
        <!-- Page précedente -->
        <div
          @click="navToPage(currentPage - 1)"
          :class="currentPage === 0 || showMultiple ? 'pag_disable' : ''"
          title="page précédente"
        >
          <i class="arrow left"></i>
        </div>
        <!-- les pages par leur numéro -->
        <template v-if="!showMultiple">
          <div
            v-for="index in nbrOfPagesDynamic()"
            :key="index"
            @click="navToPage(index + firstVisiblePage - 1)"
            :class="
              index + firstVisiblePage - 1 === currentPage ? 'current_pag' : ''
            "
          >
            <i>{{ index + firstVisiblePage }}</i>
          </div>
        </template>
        <!-- les pages par dizaine -->
        <template v-else>
          <!-- because index start at 1 -->
          <div
            @click="
              navToPage(0);
              showMultiple = false;
              firstVisiblePage = 0;
            "
            :class="firstVisiblePage == 0 ? 'current_pag' : ''"
          >
            <i>1</i>
          </div>
          <div
            v-for="index in multipleOfPage()"
            @click="
              navToPage(index * multipleBase - 1);
              showMultiple = false;
              firstVisiblePage = index * multipleBase - 1;
            "
            :class="index * multipleBase == currentPage ? 'current_pag' : ''"
            :key="index"
          >
            <i>{{ index * multipleBase }}</i>
          </div>
        </template>
        <!-- les btns par dizaine (10,20...) -->
        <div
          @click="showMultiple = !showMultiple"
          v-if="nbrOfPages > multipleBase"
        >
          <i>...</i>
        </div>
        <!-- last page -->
        <div
          @click="
            navToPage(nbrOfPages - 1);
            setfirstVisiblePageForLastItem();
          "
          title="Dernière page"
          :class="isLastMultiple() || showMultiple ? 'pag_disableHID' : ''"
        >
          <i>{{ nbrOfPages }}</i>
        </div>

        <!-- Btn  page suivante -->
        <div
          @click="navToPage(currentPage + 1)"
          title="Page suivante"
          :class="
            currentPage + 1 === nbrOfPages || showMultiple ? 'pag_disable' : ''
          "
        >
          <i class="arrow right"></i>
        </div>
      </div>
      <!-- btns choix du  style du layout -->
      <div class="viewStyle" v-if="other_style">
        <i
          class="fas fa-th"
          @click="changeListingStyle(false)"
          :class="optionStyle == false ? 'activeStyle' : ''"
        ></i>
        <i
          class="fas fa-list"
          @click="changeListingStyle(true)"
          :class="optionStyle == true ? 'activeStyle' : ''"
        ></i>
      </div>
      <!-- show quantity -->
      <p v-if="show_qtt">
        <span>{{ seenItems() }} /</span>
        {{ itemsQuantity }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  // module.exports = {
  name: "Pagination",

  data: function () {
    return {
      baseCompEl: null,
      itemContainerEl: null,
      itemsQuantity: 0, //total des articles a lister
      currentPage: 0,
      nbrOfPages: 0,
      firstVisiblePage: 0, //page de reference pour les dizaines
      optionStyle: false, //liste ou griile
      showMultiple: false, //les dizaines
    };
  },
  props: {
    pag_color1: {
      type: String,
      required: false,
      default: "gray",
    },
    pag_color2: {
      type: String,
      required: false,
      default: "inherit",
    },
    multiple_page: {
      type: String,
      required: false,
      default: "10",
    },
    items_by_page: {
      type: String,
      required: false,
      default: "12",
    },
    other_style: String /*classe option pour changer le style des listes la classe s'ajoute au parent direct des elements dans le slot  */,
    show_qtt: Boolean,
    show_top_nav: Boolean,
  },
  computed: {
    multipleBase: function () {
      return parseInt(this.multiple_page);
    },
    itemsByPage: function () {
      return parseInt(this.items_by_page);
    },
  },

  created: function () {},
  mounted: function () {
    this.$nextTick(() => {
      this.baseCompEl = document.getElementById("pagination_container");

      this.baseCompEl.style.setProperty("--pag-theme-one", this.pag_color1);
      this.baseCompEl.style.setProperty("--pag-theme-two", this.pag_color2);

      this.itemContainerEl = this.baseCompEl.getElementsByClassName(
        "slot_container"
      )[0];

      this.itemsQuantity = this.itemContainerEl.children.length;
      this.nbrOfPages = Math.ceil(this.itemsQuantity / this.itemsByPage);

      this.showWhatToShow();
    });
  },
  methods: {
    isLastMultiple() {
      return this.firstVisiblePage + this.multipleBase >= this.nbrOfPages;
    },
    setfirstVisiblePageForLastItem() {
      if (this.nbrOfPages % (this.nbrOfPages / this.multipleBase) === 0) {
        this.firstVisiblePage =
          (this.nbrOfPages / this.multipleBase - 1) * this.multipleBase;
      } else {
        this.firstVisiblePage =
          Math.floor(this.nbrOfPages / this.multipleBase) * this.multipleBase -
          1;
      }
      if (this.firstVisiblePage < 0) {
        this.firstVisiblePage = 0;
      }
    },
    changeListingStyle(status) {
      if (status) {
        this.itemContainerEl.classList.add(this.other_style);
      } else {
        this.itemContainerEl.classList.remove(this.other_style);
      }
      this.optionStyle = !this.optionStyle;
      this.showWhatToShow();
    },
    navToPage(newpage) {
      this.currentPage = newpage;
      if (this.currentPage < 0) {
        this.currentPage = 0;
      } else if (this.currentPage > this.nbrOfPages - 1) {
        this.currentPage = this.nbrOfPages - 1;
      }
      if (this.currentPage < +this.firstVisiblePage) {
        this.firstVisiblePage -= this.multipleBase;
      } else if (
        this.currentPage >
        this.firstVisiblePage + this.multipleBase - 1
      ) {
        this.firstVisiblePage += this.multipleBase;
      }
      if (this.firstVisiblePage <= 0) this.firstVisiblePage = 0;

      this.showWhatToShow();
      var scrollDiv = this.$el.offsetTop;
      window.scrollTo({ top: scrollDiv - 50, behavior: "smooth" });
      // window.scrollTo(0, this.baseCompEl.offsetTop - 20);
    },

    showWhatToShow() {
      const interval = this.currentPage * this.itemsByPage;
      for (var i = 0; i < this.itemsQuantity; i++) {
        if (i >= interval && i < interval + this.itemsByPage) {
          if (
            this.itemContainerEl.children[i].classList.contains("pagToHide")
          ) {
            this.itemContainerEl.children[i].classList.remove("pagToHide");
          }
        } else {
          this.itemContainerEl.children[i].classList.add("pagToHide");
        }
      }
    },
    seenItems() {
      let t = this.itemsByPage * (this.currentPage + 1);
      if (t > this.itemsQuantity) {
        t = this.itemsQuantity;
      }
      return t;
    },
    nbrOfPagesDynamic() {
      if (this.firstVisiblePage + this.multipleBase > this.nbrOfPages) {
        // return 1000;
        return this.nbrOfPages - this.firstVisiblePage;
        // return this.nbrOfPages % this.multipleBase;
      } else {
        const v =
          this.multipleBase >= this.nbrOfPages
            ? this.nbrOfPages
            : this.multipleBase;
        return this.multipleBase;
      }
    },
    multipleOfPage() {
      let val = Math.floor(this.nbrOfPages / this.multipleBase);
      if (val * this.multipleBase === this.nbrOfPages) {
        val--;
      }
      return val;
    },
  },
};
</script>

<style >
.navsystem {
  border: 1px var(--pag-theme-one) solid;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
.pagination_container {
  position: relative;
}
.caseBox {
  display: flex;
  flex-wrap: wrap;
}
.caseBox div {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px var(--pag-theme-one) solid;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.caseBox div:hover {
  background: var(--pag-theme-one);
  color: var(--pag-theme-two);
}
.caseBox i {
  font-style: normal;
  font-size: 1.3em;
}
.caseBox .current_pag {
  background: var(--pag-theme-one);
  color: var(--pag-theme-two);
}
.activeStyle {
  color: var(--pag-theme-one);
}
.navsystem p {
  margin: 0 2rem;
}
.viewStyle i {
  margin: 0 8px;
  font-size: 1.5em;
  cursor: pointer;
}
.viewStyle i:hover {
  color: var(--pag-theme-one);
}
.pagToHide {
  visibility: hidden;
  opacity: 0 !important;
  height: 0 !important;
  font-size: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 0 !important;
  /* display: none !important; */
}
.viewStyle {
  display: flex;
}
.pag_disable {
  opacity: 0.5;
  pointer-events: none;
}
.caseBox .pag_disableHID {
  display: none;
}
.arrow {
  border: solid var(--pag-theme-two);
  border-width: 0 3px 3px 0;
  padding: 5px;
  border-radius: 3px;
}
.arrow.right {
  transform: rotate(-45deg);
}
.arrow.left {
  transform: rotate(135deg);
}
.pagination_container .right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.pagination_container .left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

@media all and (max-width: 1000px) {
  .navsystem {
    border: none;
    margin-top: 8px;
  }
  .caseBox {
    width: 100%;
    margin-top: 1rem;
    border: 1px var(--pag-theme-one) solid;
    order: 1;
  }
}
@media all and (max-width: 650px) {
  .viewStyle {
    display: none;
  }
}
</style>
