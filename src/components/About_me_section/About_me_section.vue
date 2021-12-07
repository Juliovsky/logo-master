<template>
  <div id="about_me_section" class="container" name="about_me_section">
    <img src="../../assets/images/aboutme-tittle.png" width="173px" class="about_me_section_title">
    <div class="signature-about-me-container">
      <div class="deco-container">
     <h5 class="main-text">Меня зовут Валентина Барова – я духовный практик, консультант-психотерапевт, энерготерапевт. Моё предназначение – научить людей как проснуться.</h5>
    <img src="../../assets/images/vbarova.png" class="name">
      </div>
    <div class="exp" v-if="this.isTablet">
      <ul class="exp-list">
        <li class="exp-list-title">
          <h5 class="exp-title">4 года</h5>
          <p class="exp-text">Lorem ipsum dolor sit amet, consectetur.</p>
        </li>
        <li class="exp-list-title">
          <h5 class="exp-title">2500</h5>
          <p class="exp-text">Lorem ipsum dolor sit amet, consectetur.</p>
        </li>
      </ul>
      <div class="decoration-container">
        <a href="#" class="arrow-link">LEARN MORE<img src="../../assets/icons/arrow.png" width="92px"/></a>
      </div>
    </div>
    <img src="../../assets/images/about_me_secton_img.png" width="375px" class="main-deco-img">
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isMobile: (window.innerWidth < 768) ? true : false,
      isTablet: (window.innerWidth >= 768) ? true : false,
    }
  }
}
</script>

<style>
#about_me_section {
  margin-top: 100px;
}
.about_me_section_title {
  margin: 0 auto 25px auto;
}
.name {
  margin-top: 13px;
  margin-bottom: 23px;
}
.main-deco-img {
  margin: 0 auto;
}
@media (min-width: 768px) {
  .signature-about-me-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  #about_me_section .main-text {
    width: 75%;
    font-size: 17px;
    font-weight: 400;
  }

  .exp-list {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-top: 15px;
    padding-left: 11px;
  }

  .exp-list-title {
    width: 47%;
  }

  .exp-title {
    font-size: 36px;
    font-family: 'Mak';
    font-weight: 300;
  }

  .exp-text {
    font-weight: 400;
    font-size: 17px;
    line-height: 34px;
  }

  .main-deco-img {
    width: 726px !important;
  }
}
  @media (min-width: 992px) {


  #about_me_section {
    margin-top: 120px;
  }
  .about_me_section_title {
    margin: 0 auto 40px auto;
    width: 248px!important;

  }
  .signature-about-me-container {
    flex-wrap: nowrap;
  }
  .main-text  {
    margin-left: 0!important;
  }
  .deco-container {
    width: 38%;
    order: 1;
  }
  .exp {
    order: 3;
    width: 46%;
  }
    #about_me_section .main-text {
      width: 100%;
    }
    .main-deco-img {
      order: 2;
    }
}
</style>

