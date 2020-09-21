<!--suppress XmlInvalidId -->
<template>

  <form  class="md-layout">
    <div class="md-layout md-gutter">
      <div class="md-layout-item ">
        <md-field>
          <label for="prod-name">Nome</label>
          <md-input name="prod-name" v-model="form.name"/>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field>
          <label for="prod-brand">Marca</label>
          <md-select v-model="form.brand" name="prod-brand">
            <md-option
              v-for="brand in brands"
              :key="brand.id"
              :value="brand.id"
            >
              {{ brand.name }}
            </md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field>
          <label for="last-name">Categoria</label>
          <md-select v-model="form.category" name="prod-brand" >
            <md-option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <md-snackbar >
      The user was saved with success!
    </md-snackbar>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProdutoForm',
  data() {
    return {
      form: {
        name: '',
        brand: '',
        category: '',
      },
    };
  },

  mounted() {
    this.$store.dispatch('product/loadProductInfo');
  },

  computed: {
    ...mapGetters('product', [
      'brands',
      'categories',
    ]),
  },
};
</script>

<style scoped>

</style>
