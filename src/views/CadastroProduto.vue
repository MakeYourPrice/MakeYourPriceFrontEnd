<template>
  <div class="d-flex">
    <h2>Cadastro de produto</h2>
    <cadastro-card>
      <produto-form></produto-form>
    </cadastro-card>
  </div>
</template>

<script>
import ProdutoForm from 'components/cadastroProduto/ProdutoForm.vue';
import CadastroCard from 'components/cadastroProduto/CadastroCard.vue';

export default {
  components: { ProdutoForm, CadastroCard },
};

</script>
