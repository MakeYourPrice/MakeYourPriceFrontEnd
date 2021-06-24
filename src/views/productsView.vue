<template>
  <div>
    <ProductsList/>
    <div>
      Icons made by
      <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>

  </div>
</template>

<script>
import ProductsList from '@/components/product/ProductsList';

export default {
  name: 'ProdutosCadastrados',
  components: { ProductsList },
};
</script>
