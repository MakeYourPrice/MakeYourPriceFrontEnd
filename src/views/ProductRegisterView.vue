<template>
  <view-card title="Cadastro de produtos">
    <product-form></product-form>
  </view-card>
</template>

<script>
import ProductForm from '@/components/product/ProductForm';
import ViewCard from '@/components/app/ViewCard';

export default {
  name: 'ProductRegisterView',
  components: { ProductForm, ViewCard },
};
</script>
