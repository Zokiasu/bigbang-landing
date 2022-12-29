<template>
  <div
    :id="id"
    class="flex flex-col gap-10 text-xl lg:items-end"
    :class="rightAlign ? 'lg:flex-row-reverse lg:text-right' : 'lg:flex-row'"
  >
    <img :src="image" :alt="altImage" />
    <div class="max-w-xl">
      <h2 class="teko text-4xl font-semibold">{{ title }}</h2>
      <p class="text-base lg:text-lg">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    altImage: {
      type: String,
      required: true,
    },
    rightAlign: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
