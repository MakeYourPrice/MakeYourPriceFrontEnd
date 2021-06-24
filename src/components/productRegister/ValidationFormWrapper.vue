<!--suppress XmlInvalidId -->
<template>
  <ValidationProvider
      :name="name"
      :rules="rules"
      v-slot="{ errors, classes }"
  >
    <md-field :class="classes">
      <label :for="kebabName"> {{ name }} </label>
      <slot :nome="kebabName"></slot>
      <span class="md-error"> {{ errors[0] }} </span>
    </md-field>

  </ValidationProvider>
</template>
<script>
import { ValidationProvider } from 'vee-validate';

export default {
  components: { ValidationProvider },
  props: {
    rules: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    kebabName() {
      return this.$helpers.toKebabCase(this.name);
    },
  },
};
</script>
