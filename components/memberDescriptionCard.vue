<template>
  <div 
    :id="id"
    class="flex flex-col lg:items-end text-xl gap-10"
    :class="rightAlign ? 'lg:text-right lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <img
      :src="image"
      :alt="altImage"
      data-scroll data-scroll-delay="0.2" data-scroll-speed="6"
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

  // transition fadeIn on img when user scroll to the component
  mounted() {
    const img = this.$el.querySelector('img');
    const h2 = this.$el.querySelector('h2');
    const p = this.$el.querySelector('p');
    const card = this.$el;

    // const imgObserver = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       img.classList.remove('invisible');
    //       img.classList.add('animate__animated', 'animate__fadeInUp');
    //     }
    //   });
    // });
    // imgObserver.observe(img);

    // // add transition fadeIn on h2 when user scroll to the component
    // const h2Observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       h2.classList.remove('invisible');
    //       h2.classList.add('animate__animated', 'animate__fadeInUp');
    //     }
    //   });
    // });
    // h2Observer.observe(h2);

    // // add transition fadeIn on p when user scroll to the component
    // const pObserver = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       p.classList.remove('invisible');
    //       p.classList.add('animate__animated', 'animate__fadeInUp');
    //     }
    //   });
    // });
    // pObserver.observe(p);

    // const cardObserver = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (!entry.isIntersecting) {
    //       img.classList.add('invisible');
    //       img.classList.remove('animate__animated', 'animate__fadeInUp');
    //       h2.classList.add('invisible');
    //       h2.classList.remove('animate__animated', 'animate__fadeInUp');
    //       p.classList.add('invisible');
    //       p.classList.remove('animate__animated', 'animate__fadeInUp');
    //     }
    //   });
    // });
    // cardObserver.observe(card);
  },
}
</script>