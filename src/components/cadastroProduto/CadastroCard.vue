<template>

  <md-card class="cadastro-card md-layout-item md-size-50 md-small-size-100">
    <md-card-header>
      <div class="md-title">Users</div>
    </md-card-header>

    <md-card-content>
      <slot></slot>
    </md-card-content>

    <md-card-actions>
      <md-button type="submit" class="md-primary" >Create user</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'CadastroCard',
};
</script>

<style scoped lang="scss">
  .cadastro-card {
    flex-grow: 1;
  }
</style>
