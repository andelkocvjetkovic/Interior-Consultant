<template>
  <div
    class="px-3 bg-gray-900 text-gray-50 grid grid-rows-1-8 xl:grid-rows-5 xl:grid-cols-2 xl:px-14"
  >
    <h1
      class="font-serif text-4xl py-6 row-span-1 md:text-6xl lg:text-6xl xl:col-span-1 xl:row-span-1 xl:row-start-1"
      >Modern interior</h1
    >

    <p
      class="leading-5 w-5/6 tracking-tight py-2 row-span-2 md:text-xl lg:text-2xl xl:col-span-1 xl:row-span-2 xl:row-start-2 xl:col-start-1 xl:w-3/4 xl:text-2xl"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum mollitia
      eaque eius distinctio sed quod fuga. Omnis perferendis officia rem
      deleniti magni reprehenderit illo.</p
    >
    <router-link
      class="py-4 row-span-1 md:text-xl lg:text-xl xl:row-start-4 xl:col-start-1"
      to="/about"
      >Read more &rarr;</router-link
    >
    <div
      class="mt-7 relative row-span-3 xl:row-span-6"
      style="padding-bottom:100%"
    >
      <img
        class="absolute w-full h-full rounded-md"
        src="../assets/home.jpg"
        alt="living rome"
      />
    </div>
    <div
      class="font-serif bg-gray-900 text-xl py-3 row-span-1 shadow-2xl w-10/12 px-7 rounded-md translateCard"
    >
      <div
        class="flex flex-wrap space-x-4 xl:col-start-1 xl:row-start-5 xl:row-span-1 xl:col-span-1"
        ><img
          class="w-16 h-16 rounded-full object-top self-start flex-initial "
          src="../assets/alice.jpg"
          alt=""
        />
        <div class="text-sm flex-auto flex flex-col justify-around lg:text-lg">
          <span class="">Aliza Webber</span>
          <span class="">Interior designer</span>
        </div>
      </div>
      <span class="text-xl lg:text-2xl"
        >Designed in 2020 by Aliza Webber</span
      ></div
    >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
<style scoped>
@media screen and (max-width: 1279px) {
  .translateCard {
    transform: translate(10%, -50%);
  }
}
@media screen and (min-width: 1280px) {
  .translateCard {
    transform: translate(130%, 40%);
  }
}
</style>
