<template>
  <div class="space-y-5">
    <iframe
      ref="iframe"
      :src="videoLink"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="z-10 mx-auto aspect-video h-full w-full max-w-lg object-cover 2xl:max-w-2xl"
      :class="rightAlign ? ' lg:ml-auto lg:mr-0' : ' lg:mr-auto lg:ml-0'"
    >
    </iframe>
    <p
      class="text-center font-bold md:text-xl"
      :class="rightAlign ? 'lg:text-right' : 'lg:text-left'"
    >
      {{ videoTitle }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    videoLink: {
      type: String,
      required: true,
    },
    videoTitle: {
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
