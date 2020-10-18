<template>

  <md-card class="cadastro-card md-layout-item">
    <md-card-header>
      <div class="md-title">Novo Produto</div>
    </md-card-header>

    <md-card-content>
      <slot name="content"></slot>
    </md-card-content>

    <md-card-actions>
      <slot name="actions"></slot>
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
