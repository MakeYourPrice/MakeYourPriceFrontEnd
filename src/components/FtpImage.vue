<template>
  <img :src="baseImgLink + imgPath" alt="Imagem não é inclusiva, me desculpe">
</template>

<script>
export default {
  name: 'FtpImage',
  props: {
    imgPath: {
      required: true,
      type: String,
    },
  },
  computed: {
    baseImgLink() {
      return process.env.VUE_APP_API_URL;
    },
  },
};
</script>

<style scoped>

</style>
