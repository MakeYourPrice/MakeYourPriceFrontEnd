<template>
  <v-app>
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
        </v-tabs>
      </template>

    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="px-6" cols="12" sm="6">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
};
</script>
