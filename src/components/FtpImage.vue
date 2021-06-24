<template>
  <img :src="imgUrl" alt="Imagem de comida">
</template>

<script>
export default {
  name: 'FtpImage',
  props: {
    imgPath: {
      required: false,
      type: String,
    },
  },
  computed: {
    imgUrl() {
      if (this.imgPath) {
        return process.env.VUE_APP_API_URL + this.imgPath;
      }
      return 'https://image.flaticon.com/icons/png/128/1826/1826237.png';
    },
  },
};
</script>

<style scoped>

</style>
