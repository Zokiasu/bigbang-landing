<template>
  <div 
    :id="id"
    class="flex flex-col lg:items-end text-xl gap-10"
    :class="rightAlign ? 'lg:text-right lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <img
      :src="image"
      :alt="altImage"
      data-scroll data-scroll-delay="0.1" data-scroll-speed="6"
    />
    <div class="max-w-xl">
      <h2 class="font-semibold font-[Teko] text-4xl">{{ title }}</h2>
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

  // transition fadeIn on img when user scroll to the component
  mounted() {
    const img = this.$el.querySelector('img');
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    });
    imgObserver.observe(img);

    // remove the transition fadeIn on img when user scroll out of the component
    const imgObserverOut = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          img.classList.remove('animate__animated', 'animate__fadeInUp');
        }
      });
    });
    imgObserverOut.observe(img);

    // add transition fadeIn on p when user scroll to the component
    const p = this.$el.querySelector('p');
    const pObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          p.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    });
    pObserver.observe(p);

    // remove the transition fadeIn on p when user scroll out of the component
    const pObserverOut = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          p.classList.remove('animate__animated', 'animate__fadeInUp');
        }
      });
    });
    pObserverOut.observe(p);
  },
}
</script>