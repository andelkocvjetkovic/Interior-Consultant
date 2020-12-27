<template>
  <div
    class="flex justify-between bg-gray-900 text-white p-4 xl:justify-start xl:px-16"
  >
    <div
      class="p-2 font-bold border-2 lg:border-4 border-gray-50 font-serif  xl:p-3 cursor-pointer  hover:bg-gray-50 hover:text-gray-900"
      @click="toHome"
      >THIS INTERIOR</div
    >
    <svg
      v-if="getInnerWidth < 1280"
      ref="hamSvg"
      viewBox="0 0 40 40"
      width="40"
      height="40"
      class="relative z-20"
      @click="menuAnimation"
    >
      <line class="crta prva" x1="5" y1="10" x2="35" y2="10" />
      <line class="crta srednja" x1="5" y1="20" x2="35" y2="20" />
      <line class="crta treca" x1="5" y1="30" x2="35" y2="30" />
    </svg>
    <div v-else class="flex ml-auto space-x-10 nav lg:text-xl">
      <router-link
        class=" p-3 focus:outline-none borderLeftRight font-semibold active:bg-gray-600 "
        to="/"
        >Home</router-link
      >
      <router-link
        class="p-3 focus:outline-none  active:bg-gray-600 borderLeftRight"
        to="/collection"
        >Collection</router-link
      >
      <router-link
        class="p-3 focus:outline-none  active:bg-gray-600 borderLeftRight"
        to="/about"
        >About</router-link
      >
      <router-link
        class="p-3 focus:outline-none  active:bg-gray-600 borderLeftRight"
        to="/contact"
        >Contact</router-link
      >
    </div>
    <teleport to="#modal">
      <transition
        :css="false"
        @beforeEnter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div
          v-show="isOpen"
          class="fixed z-10 top-0
         left-0 overflow-y-hidden w-full h-screen bg-gray-900 text-gray-50 flex flex-col
         justify-start items-center space-y-5 nav"
          @click="closeModal"
        >
          <router-link
            class="mt-36 p-3 focus:outline-none borderLeftRight font-semibold active:bg-gray-600 "
            to="/"
            >Home</router-link
          >
          <router-link
            class="p-3 focus:outline-none  active:bg-gray-600 borderLeftRight"
            to="/collection"
            >Collection</router-link
          >
          <router-link
            class="p-3 focus:outline-none  active:bg-gray-600 borderLeftRight"
            to="/about"
            >About</router-link
          >
          <router-link
            class="p-3 focus:outline-none  active:bg-gray-600 borderLeftRight"
            to="/contact"
            >Contact</router-link
          >
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import gsap from "gsap";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    var hamSvg = ref(undefined);
    var isOpen = ref(false);
    var scrollY = ref(undefined);
    var router = useRouter();
    var getInnerWidth = computed(function getWidth() {
      return window.innerWidth;
    });
    var tl = gsap.timeline({
      defaults: { transformOrigin: "50% 50%", ease: "sine.out", yoyo: true },
    });
    onMounted(function initGsap() {
      if (getInnerWidth.value >= 1280) {
        return;
      }
      tl.to(".srednja", { opacity: 0, duration: 0.15 })
        .to(".prva", { rotation: 45, duration: 0.3, y: 10 }, "<.1")
        .to(".treca", { rotation: -45, duration: 0.3, y: -10 }, "<");
      tl.pause();
    });

    function menuAnimation() {
      if (!isOpen.value) {
        tl.play();
        isOpen.value = true;
        document.body.style.position = "fixed";
        document.body.style.top = `-${window.scrollY}px`;
      } else {
        tl.reverse();
        isOpen.value = false;
        scrollY.value = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = ``;
        window.scrollTo(0, parseInt(scrollY.value || "0") * -1);
      }
    }
    function beforeEnter(el) {
      gsap.set(el, { opacity: 0 });
    }
    function enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        duration: 0.2,
        ease: "power1.out",
        onComplete: done,
      });
    }
    function leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.in",
        onComplete: done,
      });
    }
    function closeModal() {
      menuAnimation();
    }
    function toHome() {
      router.push({
        name: "Home",
      });
    }
    return {
      hamSvg,
      menuAnimation,
      isOpen,
      enter,
      leave,
      beforeEnter,
      closeModal,
      toHome,
      getInnerWidth,
    };
  },
};
</script>

<style scoped>
.crta {
  stroke-width: 5px;
  stroke: rgb(255, 255, 255);
  stroke-linecap: round;
}
.nav a.router-link-exact-active {
  @apply bg-gray-600 !important;
}
@media screen and (min-width: 1024px) {
  .borderLeftRight {
    display: inline-block;
    position: relative;
  }

  .borderLeftRight::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0px;
    background-color: hsl(0, 4%, 82%);
    transform-origin: bottom right;
    transition: transform 0.2s cubic-bezier(0.86, 0, 0.07, 1);
  }

  .borderLeftRight:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}
</style>
