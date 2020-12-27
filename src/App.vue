<template>
  <the-nav-bar></the-nav-bar>

  <router-view v-if="getInnerWidth >= 1280" v-slot="{ Component }">
    <transition
      mode="out-in"
      :css="false"
      @beforeEnter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <router-view v-else></router-view>
  <the-footer></the-footer>
</template>
<script>
import TheFooter from "./components/TheFooter.vue";
import TheNavBar from "./components/TheNavBar.vue";
import { computed } from "vue";
import gsap from "gsap";
export default {
  components: { TheNavBar, TheFooter },
  setup() {
    var getInnerWidth = computed(function getWidth() {
      return window.innerWidth;
    });
    function beforeEnter(el) {
      gsap.set(el, { opacity: 0 });
    }
    function enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        duration: 0.4,
        ease: "power1.out",
        onComplete: done,
      });
    }
    function leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        duration: 0.4,
        ease: "power1.in",
        onComplete: done,
      });
    }
    return { beforeEnter, enter, leave, getInnerWidth };
  },
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-gray-900;
  @apply w-screen;

  @apply xl:max-w-full;
  @apply min-h-screen;
}
.textH1 {
  @apply text-gray-50 !important;
}
</style>
