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
            <transition name="fade-slide" mode="out-in">
              <router-view></router-view>
            </transition>
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
<style>
.fade-slide-enter-active {
  transition: all 0.5s ease;
}
.fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter, .fade-slide-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>
