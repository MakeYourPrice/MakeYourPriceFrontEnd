<!--suppress XmlInvalidId -->
<template>
  <form  class="md-layout">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-small-size-100">
        <md-field>
          <label for="first-name">First Name</label>
          <md-input name="first-name" id="first-name" v-model="form.firstName"/>
        </md-field>
      </div>
      <div class="md-layout-item md-small-size-100">
        <md-field>
          <label for="last-name">Last Name</label>
          <md-input name="last-name" id="last-name" v-model="form.lastName"/>
        </md-field>
      </div>
    </div>
    <md-snackbar >
      The user was saved with success!
    </md-snackbar>
  </form>
</template>

<script>
export default {
  name: 'ProdutoForm',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
      },
    };
  },
};
</script>

<style scoped>

</style>
