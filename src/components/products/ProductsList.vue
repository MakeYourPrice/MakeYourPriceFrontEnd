<template>
  <md-list class="md-triple-line">
    <div class="product-space" v-for="product in products" :key="product.id">
      <product :productObject="product" ></product>
      <md-divider class="md-inset"></md-divider>
    </div>
  </md-list>
</template>
<script>
import Product from 'components/products/Product';

export default {
  name: 'ProductsList',
  components: { Product },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.axios.get('/products').then((response) => {
      this.products = response.data;
    });
  },
};
</script>
