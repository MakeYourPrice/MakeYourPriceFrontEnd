<!--suppress XmlInvalidId -->
<template>
  <ValidationObserver v-slot="{ handleSubmit, invalid }">
    <form @submit.prevent="handleSubmit(buttonSubmit(invalid))" class="md-layout">
      <cadastro-card>
        <template v-slot:content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item ">

              <validation-form-wraper
                name="Nome do Produto"
                rules="max_length:30|required"
                v-slot="{nome}"
              >
                <md-input v-model="form.name" :name="nome"/>
              </validation-form-wraper>

            </div>
            <div class="md-layout-item">

              <validation-form-wraper
                name="Marca do produto"
                rules="required"
                v-slot="{nome}"
              >
                <md-select v-model="form.brand" :name="nome">
                  <md-option
                    v-for="brand in brands"
                    :key="brand.id"
                    :value="brand.id"
                  >
                    {{ brand.name }}
                  </md-option>
                </md-select>
              </validation-form-wraper>
            </div>

            <div class="md-layout-item">
              <validation-form-wraper
                name="Categoria do produto"
                rules="required"
                v-slot="{nome}"
              >
                <md-select v-model="form.category" :name="nome">
                  <md-option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </md-option>
                </md-select>
              </validation-form-wraper>
            </div>
          </div>
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
import { ValidationObserver } from 'vee-validate';
import CadastroCard from 'components/productRegister/RegisterCard.vue';
import ValidationFormWraper from 'components/productRegister/ValidationFormWrapper.vue';
import notificationMixin from 'mixins/notification';

export default {
  name: 'ProdutoForm',
  mixins: [notificationMixin],
  components: {
    ValidationFormWraper,
    CadastroCard,
    ValidationObserver,
  },
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
        return;
      }
      this.axios.post('/products', {
        name: this.form.name,
        productBrandId: this.form.brand,
        productCategoryId: this.form.category,
      }).then(() => {
        this.notifySucess('Produto cadastrado');
      }).catch(() => {
        this.notifyError('Desculpe ocorreu um erro ao cadastrar o produto');
      });
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
