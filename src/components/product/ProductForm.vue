<template>
  <validation-observer
    ref="observer"
    v-slot="{ handleSubmit }"
  >
    <form
      ref="form"
      id="product-form"
      @submit.prevent="handleSubmit(formSubmit)"
      class="md-layout"
    >
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
      <portal to="cardbuttons">
        <v-btn
          text
          color="teal accent-4"
          type="submit"
          form="product-form"
        >
          Cadastrar Produto
        </v-btn>
      </portal>
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
    formSubmit() {
      alert('submit');
    },
  },
};
</script>
