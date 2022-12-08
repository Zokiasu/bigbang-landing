<template>
  <section data-scroll-section data-scroll-speed="-8" data-scroll-position="top" id="description_section" class="container mx-auto min-h-[70vh] lg:px-20">
    <icons-bigbang-crown id="crown_description" class="invisible w-14 h-14 mx-auto"/>
    <h3 id="title_description" class="invisible text-4xl font-bold font-[Teko] text-center pb-14 lg:pb-20">
      WHO ARE THEY?
    </h3>
    <p id="description" class="invisible leading-relaxed text-lg lg:text-xl mx-auto">
      Bigbang est un groupe de cinq membres composé de G-Dragon, T.O.P, Taeyang, Daesung et Seungri. Depuis leur formation en 2006, ils ont connu un immense succès en Corée du Sud et à l'international grâce à leur musique unique et à leur talent pour la danse. 
      <br><br>
      Bigbang a remporté de nombreux prix, notamment aux Mnet Asian Music Awards et aux Seoul Music Awards, ainsi que le prix "World's Best Group" aux World Music Awards en 2012. Leur album "MADE" a également atteint la première place du classement Billboard World Albums Chart. Bigbang est considéré comme l'un des groupes les plus influents et populaires de la Kpop.
      <br><br>
      Après un hiatus de près de 4 ans, le groupe est revenu avec un nouveau single "Still Life", qui a atteint la première place du classement Gaon Digital Chart et leur à permis d'obtenir le prix "Best Vocal Performance (Groupe)" décerné au MAMA Awards 2022.
    </p>
  </section>
</template>

<script>
export default {
  mounted() {
    const title = document.getElementById('title_description');
    const description = document.getElementById('description');
    const crown = document.getElementById('crown_description');
    const section = document.getElementById('description_section');

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          title.classList.remove('invisible');
          title.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    });
    titleObserver.observe(title);

    const descriptionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          description.classList.remove('invisible');
          description.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    });
    descriptionObserver.observe(description);

    const crownObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          crown.classList.remove('invisible');
          crown.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    });
    crownObserver.observe(crown);

    // const sectionObserver = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (!entry.isIntersecting) {
    //       title.classList.add('invisible');
    //       title.classList.remove('animate__animated', 'animate__fadeInUp');
    //       description.classList.add('invisible');
    //       description.classList.remove('animate__animated', 'animate__fadeInUp');
    //       crown.classList.add('invisible');
    //       crown.classList.remove('animate__animated', 'animate__fadeInUp');
    //     }
    //   });
    // });
    // sectionObserver.observe(section);
  },
}
</script>