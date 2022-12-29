<template>
  <icons-bigbang-crown :id="id" :class="classProps" />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    classProps: {
      type: String,
      default: "",
    },
  },

  mounted() {
    const crown = document.getElementById(this.id);
    const crownObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          crown.classList.add("animate__animated", "animate__fadeInDown");
          // increase animate delay
          crown.style.setProperty("--animate-duration", "2s");
        }
      });
    });
    crownObserver.observe(crown);
  },
};
</script>
