<template>
  <v-list three-line>
    <div class="product-space" v-for="product in products" :key="product.id">
      <product :productObject="product"></product>
      <v-divider></v-divider>
    </div>
  </v-list>
</template>
<script>
import Product from './Product';

export default {
  name: 'ProductsList',
  components: { Product },
  data() {
    return {
      products: [
        {
          id: 1, name: 'name', brand: 'brand', category: 'category',
        },
        {
          id: 2, name: 'name', brand: 'brand', category: 'category',
        },
        {
          id: 3, name: 'name', brand: 'brand', category: 'category',
        },
        {
          id: 4, name: 'name', brand: 'brand', category: 'category',
        },
        {
          id: 5, name: 'name', brand: 'brand', category: 'category',
        },
      ],
    };
  },
  mounted() {
    // this.axios.get('/products').then((response) => {
    //   this.products = response.data;
    // });
  },
};
</script>
