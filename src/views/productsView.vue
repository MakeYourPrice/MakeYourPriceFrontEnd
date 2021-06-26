<template>
  <view-card title="Lista de produtos">
    <ProductsList/>
    <div>
      Icons made by
      <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>
  </view-card>
</template>

<script>
import ProductsList from '@/components/product/ProductsList';
import ViewCard from '@/components/app/ViewCard';

export default {
  name: 'ProdutosCadastrados',
  components: { ViewCard, ProductsList },
};
</script>
