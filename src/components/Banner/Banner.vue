<template>
  <div id="banner" class="container">
  <router-link to="course-details">
  <a href="#" v-if="isMobile || isTablet"><img src="../../assets/images/banner.png" width="100%"/></a>
  <a href="#" v-if="isDesktop"><img src="../../assets/images/banner-desk.png" width="100%"/></a>
  </router-link>
  <SocialIcons v-if="isDesktop"/>
  </div>
</template>


<script>
import SocialIcons from '../Contacts_section/SocialIcons.vue';

export default {
  components: {
    SocialIcons
  },
  data: function () {
    return {
      isMobile: (window.innerWidth < 768) ? true : false,
      isTablet: (992 < window.innerWidth >= 768) ? true : false,
      isDesktop: (window.innerWidth >= 992) ? true : false
    }
  }
}
</script>

<style>
@media (min-width: 992px) {
#banner #social-networks {
  max-width: 213px;
}
#banner #social-networks  .social-network-item img {
    width: 25px;
  }
  #banner #social-networks {
    max-width: 213px;
    margin: 16px 0 0 auto;
  }
}

</style>
