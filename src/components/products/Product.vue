<template>
  <md-list-item>
    <md-avatar>
      <ftp-image img-path="product.productImage"></ftp-image>
    </md-avatar>

    <div class="md-list-item-text">
      <span>{{ productObject.name }}</span>
      <span>{{ productObject.productBrand }}</span>
      <span>{{ productObject.productBrand}}</span>
    </div>

  </md-list-item>
</template>
<script>
import FtpImage from 'components/FtpImage';

export default {
  name: 'itemProduto',
  components: { FtpImage },
  props: {
    productObject: {
      type: Object,
      required: true,
    },
  },
};
</script>
