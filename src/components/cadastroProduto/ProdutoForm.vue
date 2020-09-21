<!--suppress XmlInvalidId -->
<template>
  <ValidationObserver v-slot="{ handleSubmit, invalid }">
    <form @submit.prevent="handleSubmit(buttonSubmit(invalid))" class="md-layout">
      <cadastro-card>
        <template v-slot:content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item ">
              <ValidationProvider
                name="Nome do Produto"
                rules="max_length:30|required" v-slot="{ errors, classes }"
              >

                <md-field :class="classes">
                  <label for="prod-name">Nome</label>
                  <md-input name="prod-name" v-model="form.name"/>
                  <span class="md-error"> {{ errors[0] }} </span>
                </md-field>

              </ValidationProvider>

            </div>
            <div class="md-layout-item">
              <ValidationProvider
                name="Marca do produto"
                rules="required" v-slot="{ errors, classes }"
              >
                <md-field :class="classes">
                  <label for="prod-brand">Marca</label>
                  <md-select v-model="form.brand" name="prod-brand">
                    <md-option
                      v-for="brand in brands"
                      :key="brand.id"
                      :value="brand.id"
                    >
                      {{ brand.name }}
                    </md-option>
                  </md-select>
                  <span class="md-error"> {{ errors[0] }} </span>
                </md-field>

              </ValidationProvider>
            </div>
            <div class="md-layout-item">

              <ValidationProvider
                name="Categoria do produto"
                rules="required" v-slot="{ errors, classes }"
              >
                <md-field :class="classes">
                  <label for="prod-category">Categoria</label>

                  <md-select v-model="form.category" name="prod-category">
                    <md-option
                      v-for="category in categories"
                      :key="category.id"
                      :value="category.id"
                    >
                      {{ category.name }}
                    </md-option>
                  </md-select>
                  <span class="md-error"> {{ errors[0] }} </span>
                </md-field>

              </ValidationProvider>

            </div>
          </div>
          <md-snackbar>
            The user was saved with success!
          </md-snackbar>
        </template>
        <template v-slot:actions>
          <md-button type="submit" class="md-primary">Cadastrar Produto</md-button>
        </template>
      </cadastro-card>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import CadastroCard from 'components/cadastroProduto/CadastroCard.vue';

export default {
  name: 'ProdutoForm',
  components: { CadastroCard, ValidationProvider, ValidationObserver },
  data() {
    return {
      form: {
        name: '',
        brand: '',
        category: '',
      },
    };
  },

  mounted() {
    this.$store.dispatch('product/loadProductInfo');
  },

  methods: {

    buttonSubmit(invalido) {
      if (invalido) {
        console.log('form invalido');
        return;
      }
      console.log('form submetido');
    },
  },

  computed: {
    ...mapGetters('product', [
      'brands',
      'categories',
    ]),
  },
};
</script>

<style scoped>

</style>
