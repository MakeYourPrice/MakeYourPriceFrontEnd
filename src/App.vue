<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">

      <md-app-toolbar class="md-large md-dense md-primary">
        <top-bar></top-bar>
      </md-app-toolbar>

      <md-app-drawer :md-active="menuVisible" @update:mdActive="setMenuVisible">
        <side-bar></side-bar>
      </md-app-drawer>

      <md-app-content>
        <transition name="fade-slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import SideBar from './components/app/SideBar.vue';
import TopBar from './components/app/TopBar.vue';

export default {
  name: 'App',
  components: { TopBar, SideBar },
  methods: {
    ...mapMutations(['toggleMenuVisible', 'setMenuVisible']),

  },

  computed: {
    ...mapGetters(['menuVisible']),
  },
};
</script>

<style lang="scss" scoped>
.md-app {
  height: 100vh;
  width: 100%;
  border: 1px solid rgba(#000, .12);
}
.page-container {
  min-height: 100%;
  display: flex;
}
.md-app-content {
  width: 100%;
}

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
