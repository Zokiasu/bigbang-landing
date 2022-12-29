<template>
  <a
    :href="link"
    target="_blank"
    class="jusce flex items-center space-x-2 transition-all duration-500 ease-in-out"
    :class="color ? 'hover:' + color : 'hover:text-red-700'"
  >
    <component :is="icon" class="h-8 w-8" />
    <p class="teko pt-1.5 text-xl font-bold xl:text-2xl">{{ name }}</p>
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
  },
};
</script>
