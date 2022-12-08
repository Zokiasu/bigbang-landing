<template>
  <section data-scroll-section id="group_members" class="container w-full mx-auto min-h-screen">
    <golden-crown-transition id="crown_members" data-scroll data-scroll-speed="3" class="w-14 h-14 mx-auto mb-5"/>
    <div class="space-y-40">
      <member-description-card
        data-scroll data-scroll-speed="3"
        id="gdragon_description"
        title="G-Dragon"
        description="G-Dragon (également connu sous le nom de Kwon Ji Yong) est le leader du groupe Bigbang. Il est connu pour sa composition, son écriture et sa production de chansons, ainsi que pour son style unique et ses performances scéniques énergiques. Il est également un designer de mode talentueux."
        :image="GDRAGON"
        alt-image="gdragon picture leader of bigbang"
      />

      <member-description-card
        data-scroll data-scroll-speed="3"
        id="top_description2"
        title="TOP"
        description="T.O.P (également connu sous le nom de Choi Seung-hyun) est un des membres du groupe de K-Pop Bigbang. Il est connu pour ses performances vocales et ses compétences en tant que rappeur. En dehors de la musique, il est également un acteur talentueux et a joué dans de nombreuses productions cinématographiques et télévisées en Corée du Sud."
        :image="TOP"
        alt-image="top picture member of bigbang"
        rightAlign
      />

      <member-description-card
        data-scroll data-scroll-speed="3"
        id="taeyang_description"
        title="Taeyang"
        description="Taeyang (également connu sous le nom de Dong Young-bae) est un des membres du groupe de K-Pop Bigbang. Il est principalement connu pour ses performances vocales et ses chansons R&B. En dehors de la musique, il est également un acteur et a joué dans plusieurs productions cinématographiques et télévisées en Corée du Sud."
        :image="TAEYANG"
        alt-image="taeyang picture member of bigbang"
      />

      <member-description-card
        data-scroll data-scroll-speed="3"
        id="daesung_description"
        title="Daesung"
        description="Daesung (également connu sous le nom de D-Lite) est un des membres du groupe de K-Pop Bigbang. Il est connu pour ses performances vocales et son énergie sur scène. En dehors de la musique, il est également un acteur et a joué dans plusieurs productions cinématographiques et télévisées en Corée du Sud. Il a également poursuivi une carrière réussie en tant qu'artiste solo au Japon, en sortant des albums et en faisant des tournées."
        :image="DAESUNG"
        alt-image="daesung picture member of bigbang"
        rightAlign
      />
      <div>
        <div id="collapseExample" class="collapse">
          <div 
            id="seungri_description"
            class="flex flex-col lg:items-end text-xl gap-10 lg:flex-row"
          >
            <img
              :src="SEUNGRI"
              alt="seungri picture member of bigbang"
            />
            <div class="max-w-xl">
              <h2 class="font-semibold teko text-4xl">Seungri</h2>
              <p>Seungri (également connu sous le nom de Lee Seung-hyun) est un des membres du groupe de K-Pop Bigbang. Il est connu pour ses performances vocales et ses compétences en tant que danseur. En dehors de la musique, il est également un entrepreneur et a lancé plusieurs entreprises dans divers domaines, notamment la restauration.</p>
            </div>
          </div>
        </div>
        <button
          class="flex w-full justify-center px-20 pt-5 mb-5 cursor-default z-50"
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#collapseExample" 
          aria-expanded="false" 
          aria-controls="collapseExample"
        >
          <golden-crown-transition id="crown_last_members" class="w-14 h-14"/>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  import GDRAGON from '@/assets/image/GDRAGON.png';
  import TAEYANG from '@/assets/image/TAEYANG.png';
  import TOP from '@/assets/image/TOP.png';
  import DAESUNG from '@/assets/image/DAESUNG.png';
  import SEUNGRI from '@/assets/image/SEUNGRI.jpg';

  export default {
    name: 'MembersSection',
    data() {
      return {
        GDRAGON,
        TAEYANG,
        TOP,
        DAESUNG,
        SEUNGRI
      }
    },
  };
</script>