<template>
  <div>
    <h2>Cadastro de produto</h2>
    <product-form></product-form>
  </div>
</template>

<script>
import ProductForm from '@/components/product/ProductForm';

export default {
  name: 'ProductRegisterView',
  components: { ProductForm },
};
</script>

<style scoped>

</style>
