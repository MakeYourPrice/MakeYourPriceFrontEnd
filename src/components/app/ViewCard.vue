<template>
  <v-card class="pa-1">
    <v-card-title>
      {{title}}
    </v-card-title>
    <v-container>
      <slot></slot>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <portal-target name="cardbuttons">
      </portal-target>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ViewCard',
  props: {
    title: String,
  },
};
</script>

<style scoped>

</style>
