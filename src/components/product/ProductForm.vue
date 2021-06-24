<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid, handleSubmit }"
  >
    <form @submit.prevent="handleSubmit(buttonSubmit(invalid))" class="md-layout">
      <v-card class="pa-1">
        <v-card-title>
          Titulo
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
              class="py-1"
            >
              <validation-provider
                v-slot="{ errors }"
                name="nome"
                rules="max_length:30|required"
              >
                <v-text-field
                  v-model="form.name"
                  :counter="30"
                  :error-messages="errors"
                  label="Nome do produto"
                ></v-text-field>
              </validation-provider>
            </v-col>

            <v-col
              cols="12"
              md="4"
              class="py-1"
            >
              <validation-provider
                v-slot="{ errors }"
                name="marca"
                rules="required"
              >
                <v-combobox
                  v-model="form.brand"
                  :items="brands"
                  item-text="name"
                  item-value="name"
                  :error-messages="errors"
                  label="Marca do produto"
                ></v-combobox>
              </validation-provider>
            </v-col>

            <v-col
              cols="12"
              md="4"
              class="py-1"
            >
              <validation-provider
                v-slot="{ errors }"
                name="categorias"
                rules="required"
              >
                <v-combobox
                  v-model="form.category"
                  :items="categorys"
                  item-text="name"
                  item-value="name"
                  :error-messages="errors"
                  label="Categoria do produto"
                ></v-combobox>
              </validation-provider>
            </v-col>

          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            type="submit"
            color="teal accent-4"
          >
            Cadastrar Produto
          </v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  name: 'ProductForm',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      form: {
        name: '',
        brand: '',
        category: '',
      },
      brands: [{ name: 'potato' }, { name: 'coco' }],
      categorys: [{ name: 'potato' }, { name: 'coco' }],
    };
  },
  methods: {
    buttonSubmit(invalido) {
      if (invalido) {
        console.log('invalido');
        // return;
      }
      // this.axios.post('/products', {
      //   name: this.form.name,
      //   productBrandId: this.form.brand,
      //   productCategoryId: this.form.category,
      // })
      //   .then(() => {
      //     // this.notifySucess('Produto cadastrado');
      //   })
      //   .catch(() => {
      //     // this.notifyError('Desculpe ocorreu um erro ao cadastrar o produto');
      //   });
    },
  },
};
</script>

<style scoped>

</style>
