<template>
  <div class="space-y-2 md:space-y-5 xl:space-y-6 2xl:space-y-10">
    <div
      id="bb_logo"
      class="flex flex-col space-y-1.5 md:space-y-2.5 lg:space-y-5 w-fit mx-auto overflow-hidden"
    >
      <div ref="line1" class="invisible bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
      <div ref="line2" class="invisible bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
      <div ref="line3" class="invisible bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
      <div ref="line4" class="invisible bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
      <div ref="line5" class="invisible bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
    </div>
    <h1
      ref="main_title"
      class="invisible teko font-bold text-center text-7xl md:text-[110px] 2xl:text-[230px]"
    >
      BIGBANG
    </h1>
  </div>
</template>

<script>
  import 'animate.css';
  export default {
    name: "bbLogo",

    mounted() {
      setTimeout(() => {
        this.$refs.line1.classList.remove("invisible");
        this.$refs.line1.classList.add("animate__animated", "animate__slideInLeft");
        this.$refs.line2.classList.remove("invisible");
        this.$refs.line2.classList.add("animate__animated", "animate__slideInRight");
        this.$refs.line3.classList.remove("invisible");
        this.$refs.line3.classList.add("animate__animated", "animate__slideInLeft");
        this.$refs.line4.classList.remove("invisible");
        this.$refs.line4.classList.add("animate__animated", "animate__slideInRight");
        this.$refs.line5.classList.remove("invisible");
        this.$refs.line5.classList.add("animate__animated", "animate__slideInLeft");

        this.$refs.main_title.classList.remove("invisible");
        this.$refs.main_title.classList.add("animate__animated", "animate__fadeInUp");
      }, 500);
    },

  };
</script>