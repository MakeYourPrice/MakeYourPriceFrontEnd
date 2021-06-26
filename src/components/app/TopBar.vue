<template>
  <v-app-bar
    app
    color="#448aff"
    dark
    dense
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Make Your Price</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-tabs align-with-title optional>
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab :to="{ name: 'home' }">
          Home
        </v-tab>
        <v-tab :to="{ name: 'cadastro-de-produto' }">
          Cadastrar um produto
        </v-tab>
        <v-tab :to="{ name: 'produtos' }">
          Produtos
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>
