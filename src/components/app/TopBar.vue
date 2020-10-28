<template>
  <div style="width: 100%">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <md-button class="md-icon-button" @click="toggleMenuVisible">
          <md-icon>menu</md-icon>
        </md-button>

        <span class="md-title">Make Your Price</span>
      </div>

      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>
      </div>
    </div>

    <div class="md-toolbar-row scroll-bar-x disable-scrollbars">
      <md-tabs class="md-primary" md-sync-route>
        <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
        <md-tab id="tab-produto" md-label="Cadastrar um produto" to="/product/new"></md-tab>
        <md-tab id="tab-produto-show" md-label="Produtos" to="/product/show"></md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['toggleMenuVisible']),
  },
};
</script>

<style lang="scss" type="text/scss">
$space: 20px;

// TODO aplicar regras de ux
//  https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585
.scroll-bar-x {

  overflow-x: scroll;
  scroll-snap-type: x proximity;

  a {
    display: inline-block;
    text-align: center;
    text-decoration: none;
  }
}
</style>
