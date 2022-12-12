<template>
  <div 
    :id="id"
    class="flex flex-col lg:items-end text-xl gap-10"
    :class="rightAlign ? 'lg:text-right lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <img
      :src="image"
      :alt="altImage"
      data-scroll data-scroll-speed="3"
    />
    <div class="max-w-xl">
      <h2 class="font-semibold teko text-4xl">{{ title }}</h2>
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
}
</script>