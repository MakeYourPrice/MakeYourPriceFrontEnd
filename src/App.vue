<template>
  <v-app>
    <top-bar></top-bar>
    <v-main>
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="px-6 py-5" cols="12" sm="6">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from '@/components/app/TopBar';

export default {
  name: 'App',
  components: {
    TopBar,
  },
};
</script>
