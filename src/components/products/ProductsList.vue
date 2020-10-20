<template>
  <md-list class="md-triple-line">
    <product productObject="{}"></product>

    <md-divider class="md-inset"></md-divider>

    <md-list-item>
      <md-avatar>
        <img src="http://lorempixel.com/40/40/food/2" alt="People">
      </md-avatar>

      <div class="md-list-item-text">
        <span>Feijão</span>
        <span>Do zé</span>
        <span>Granulados</span>
      </div>

      <md-button class="md-icon-button md-list-action">
        <md-icon>star_border</md-icon>
      </md-button>
    </md-list-item>

    <md-divider class="md-inset"></md-divider>

    <md-list-item>
      <md-avatar>
        <img src="http://lorempixel.com/40/40/food/3" alt="People">
      </md-avatar>

      <div class="md-list-item-text">
        <span>Batata</span>
        <span>Da granja</span>
        <span>Vegetais</span>
      </div>

      <md-button class="md-icon-button md-list-action">
        <md-icon>star_border</md-icon>
      </md-button>
    </md-list-item>

    <md-divider class="md-inset"></md-divider>

    <md-list-item>
      <md-avatar>
        <img src="http://lorempixel.com/40/40/food/4" alt="People">
      </md-avatar>

      <div class="md-list-item-text">
        <span>Arroz</span>
        <span>Do Marcio</span>
        <span>Comida</span>
      </div>

      <md-button class="md-icon-button md-list-action">
        <md-icon>star_border</md-icon>
      </md-button>
    </md-list-item>
  </md-list>
</template>
<script>
import Product from 'components/products/Product';

export default {
  name: 'ProductsList',
  components: { Product },
};
</script>
