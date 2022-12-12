<template>
  <a 
    :href="link"
    target="_blank"
    class="flex space-x-2 jusce items-center transition-all duration-500 ease-in-out "
    :class="color ? 'hover:'+color : 'hover:text-red-700'"
  >
    <component :is="icon" class="w-8 h-8" />
    <p class="font-bold teko pt-1.5 text-xl xl:text-2xl">{{ name }}</p>
  </a>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: false
      }
    }
  }
</script>