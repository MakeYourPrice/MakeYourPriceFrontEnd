<template>
  <v-list-item>
    <v-list-item-avatar>
      <ftp-image ></ftp-image>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-html="productObject.name"></v-list-item-title>
      <v-list-item-subtitle v-html="productObject.brand + productObject.category">
      </v-list-item-subtitle>
    </v-list-item-content>

  </v-list-item>
</template>
<script>
import FtpImage from '@/components/FtpImage';

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
