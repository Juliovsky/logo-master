<template>
  <div id="articles_section" class="container" name="articles_section">
    <img src="../../assets/images/articles-title.png" width="142px" class="articles_section_title">
    <ul class="articles-list">
      <li class="articles-list-item">
        <h4 class="article-title">нимфомания - что это?</h4>
        <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem at fusce at egestas. Tempor ullamcorper ultrices nisl orci. Aenean consequat faucibus amet senectus. Tortor sit elit amet at egestas lectus nibh aenean. Aenean consequat faucibus amet senectus. </p>
              <a href="#" class="arrow-link">READ MORE <img src="../../assets/icons/arrow.png" width="92px"/></a>

      </li>
      <li class="articles-list-item">
        <h4 class="article-title">тело</h4>
        <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem at fusce at egestas. Tempor ullamcorper ultrices nisl orci. Aenean consequat faucibus amet senectus. Tortor sit elit amet at egestas lectus nibh aenean. Aenean consequat faucibus amet senectus. </p>
              <a href="#" class="arrow-link">READ MORE <img src="../../assets/icons/arrow.png" width="77px"/></a>

      </li>
      <li class="articles-list-item">
        <h4 class="article-title">психика</h4>
        <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem at fusce at egestas. Tempor ullamcorper ultrices nisl orci. Aenean consequat faucibus amet senectus. Tortor sit elit amet at egestas lectus nibh aenean. Aenean consequat faucibus amet senectus. </p>
              <a href="#" class="arrow-link">READ MORE <img src="../../assets/icons/arrow.png" width="92px"/></a>

      </li>
      <li class="articles-list-item">
        <h4 class="article-title">энергия</h4>
        <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem at fusce at egestas. Tempor ullamcorper ultrices nisl orci. Aenean consequat faucibus amet senectus. Tortor sit elit amet at egestas lectus nibh aenean. Aenean consequat faucibus amet senectus. </p>
         <a href="#" class="arrow-link">READ MORE <img src="../../assets/icons/arrow.png" width="92px"/></a>
      </li>
    </ul>
    <img width=" 337px" class="deco-img" src="../../assets/images/deco-img.png" v-if="this.isMobile">
    <img v-if="this.isTablet" width="705px" class="deco-img" src="../../assets/images/deco-img.png">
    <img v-if="this.isDesktop" width="1048px" class="deco-img" src="../../assets/images/final-deco.png">
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isMobile: (window.innerWidth < 768) ? true : false,
      isTablet: (window.innerWidth >= 768 && window.innerWidth <= 992) ? true : false,
      isDesktop: (window.innerWidth >= 992 ) ? true : false
    }
  }
}
</script>

<style>

@font-face {
  font-family: 'Mak';
  src: url('../../assets/fonts/MAK.eot');
  src: local('☺'), url('../../assets/fonts/MAK.woff') format('woff'), url('../../assets/fonts/MAK.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}


#articles_section {
  margin-top: 100px;
}
.articles_section_title {
  margin: 100px auto 26px 0;
}
.article-title {
  font-family: 'Mak';
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.articles-list .articles-list-item:first-child{
  background-image: url("../../assets/images/img-bg-1.png");
  width: 335px;
  height: 619px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 60px 22px 0 22px;
  margin: 0 auto 21px auto;
}

.articles-list .articles-list-item:nth-child(2){
  background-image: url("../../assets/images/art-2-bg.png");
  width: 335px;
  height: 422px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 60px 22px 0 22px;
  margin: 0 auto 21px auto;
}

.articles-list .articles-list-item:nth-child(3){
  background-image: url("../../assets/images/art-3-bg.png");
  width: 335px;
  height: 422px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 60px 22px 0 22px;
  margin: 0 auto 21px auto;
}
.articles-list .articles-list-item:nth-child(4){
  background-image: url("../../assets/images/art-bg-4.png");
  width: 335px;
  height: 422px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 60px 22px 0 22px;
  margin: 0 auto 21px auto;
}
ul {
  padding: 0;
  margin: 0;
}
.articles-list {
  display: block;
  margin: 0 auto;
  padding: 0;
}

.article-text {
  color: #484848;
  font-weight: 400;
  font-size: 13px;
  line-height: 30px;
  margin-bottom: 0;
}
.deco-img {
  display: block;
  margin: 100px auto 0 auto;
}
@media (min-width: 768px) {
  .articles-list .articles-list-item:first-child {
    background-image: url("../../assets/images/nimf-tabl-ri.png");
    width: 706px;
    height: 625px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 69px 85px 0 85px;
    margin: 0 auto 30px auto;
  }

  .articles-list .articles-list-item:nth-child(2) {
    background-image: url("../../assets/images/body-tabl.png");
    width: 706px;
    height: 448px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 70px 129px 0 87px;
    margin: 0 auto 30px auto;
  }

  .articles-list .articles-list-item:nth-child(3) {
    background-image: url("../../assets/images/psycho-tabl.png");
    width: 706px;
    height: 448px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 70px 129px 0 87px;
    margin: 0 auto 30px auto;
  }

  .articles-list .articles-list-item:nth-child(4) {
    background-image: url("../../assets/images/energy-tabl.png");
    width: 706px;
    height: 448px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 70px 129px 0 87px;
    margin: 0 auto 30px auto;
  }

  .article-title {
    font-family: 'Mak';
    font-weight: 300;
    font-size: 38px;
    line-height: 36px;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .article-title {
    font-size: 38px;
  }

  .article-text {
    font-size: 17px;
  }

  .article-text {
    margin-bottom: 20px;
  }
}
@media (min-width: 992px) {
  #articles_section {
    margin-top: 120px;
  }
  .articles_section_title {
    margin: 0 auto;
  }
  .articles-list .articles-list-item:first-child {
    background-image: url("../../assets/images/desk-art.png");
    width: 100%;
    height: 405px;
  }
  .articles-list .articles-list-item:first-child .article-text{
    width: 65%;
  }
  .articles-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .articles-list .articles-list-item:nth-child(2){
    background-image: url("../../assets/images/art-2-bg.png");
    width: 393px;
    height: 445px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 60px 22px 0 22px;
    margin: 0;
  }

  .articles-list .articles-list-item:nth-child(3){
    background-image: url("../../assets/images/art-3-bg.png");
    width: 393px;
    height: 445px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 60px 22px 0 22px;
    margin: 0;
  }
  .articles-list .articles-list-item:nth-child(4){
    background-image: url("../../assets/images/art-bg-4.png");
    width: 393px;
    height: 445px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 60px 22px 0 22px;
    margin: 0;
  }
  .deco-img {
    margin: 120px auto 0 auto;
  }
  .contracts-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .contact-list-item {
    width: 33%;
  }

}
</style>
