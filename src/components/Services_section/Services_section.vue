<template>
  <div id="services_section" class="container" name="services_section">
    <img src="../../assets/images/servise-title.png" width="138px" class="title-img">
    <h4 class="service-title">курс психотерапии</h4>
    <div class="service-content-container">
      <div class="main-content-container">
        <img src="../../assets/images/service.png" width="150px">
        <div class="service-content">
        <h5 class="service-content-title">Стресс, связь с телом, психикой, энэргетикой</h5>
        <p class="main-text">Бороться со Стрессом – бесполезно,он будет в люом возврасте, на каждом этапе и в каждой сфере Вашей жизни,- а вот научиться проживать  стрессовые ситуации так, что чтобы не происходило в Вашей жизни Вы оставались в стабильно хорошем психическом,физическом, энергетиечском состоянии – можном и нужно.</p>
        </div>
      </div>
    </div>
    <div class="decoration-container">
      <a href="#" class="arrow-link">SIGN UP NOW <img src="../../assets/icons/arrow.png" width="92px"/></a>
      <img src="../../assets/images/service-deco.png" width="114px" class="sub-img-deco">
    </div>


  </div>
</template>

<script>

</script>

<style>
* {
  font-family: 'Montserrat';
}
html {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}


img {
  display: block;
  max-width: 100%;
  height: auto;
}
ol, ul, dl {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}

button:hover {
  cursor: pointer;
}

button:focus {
  outline: none;
}
#services_section {
  margin-top: 100px;
}
.service-title {
  font-size: 30px;
  font-weight: 300;
  font-family: 'Mak';
  text-transform: uppercase;
}
.service-content-title {
  font-size: 18px;
  font-weight: 400;
  margin-left: 12px;
  text-transform: uppercase;
  /* width: 50%; */
  font-family: 'Montserrat';
  text-align: center;
  display: block;
  line-height: 25px;
}
.main-content-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.service-title {
  margin: 26px 0 10px  0;
}

.main-text {
  font-weight: 400;
  line-height: 29px;
  font-size: 15px;
  margin-top: 15px;
}
.arrow-link  {
  display: flex;
  align-items: center;
  color: black;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
}
.arrow-link img {
  margin-left: 16px;
}
.decoration-container {
  display: flex;
  align-items: flex-start;
  margin-top: 22px;
  justify-content: space-between;
}

.main-content-container img {
  display: block;
  margin: 15px auto;
}
@media (min-width: 768px) {
  .service-title {
    font-size: 50px;
    font-weight: 300;
    margin: 26px 0 10px 0;
  }

  .main-content-container img {
    width: 278px;
  }

  .main-content-container {
    flex-wrap: nowrap;
  }

  .service-content-title {
    font-size: 18px;
    font-weight: 400;
    margin-left: 12px;
    text-transform: uppercase;
    width: 100%;
    font-family: 'Montserrat';
  }

  .main-text {
    font-weight: 400;
    line-height: 29px;
    font-size: 15px;
    margin-top: 15px;
    font-family: 'Montserrat';
    margin-left: 15px;
  }

  #services_section .decoration-container {
    display: flex;
    align-items: flex-start;
    margin-top: -84px;
    justify-content: space-between;
  }

  #services_section .decoration-container .arrow-link {
    margin-left: 40%;
  }
}
  @media (min-width: 992px) {
    #services_section {
      margin-top: 120px;
    }
    #services_section img.title-img {
      width: 180px!important;
      margin: 0 auto;
    }
    .service-title {
      font-size: 50px;
      font-weight: 300;
      text-align: center;
    }
    .main-content-container img {
      width: 375px;
    }
    #services_section img.title-img {
      width: 180px!important;
      margin: 0px auto 55px auto;
    }
    .service-content-title {
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      margin-left: 53px;
    }
    .main-text {
      font-family: Montserrat;
      font-size: 21px;
      font-style: normal;
      font-weight: 400;
      line-height: 38px;
      letter-spacing: 0em;
      text-align: left;
      margin-left: 53px;
    }
    .decoration-container .sub-img-deco {
      width: 218px!important;
    }
    #services_section .decoration-container {
      display: flex;
      align-items: flex-start;
      margin-top: 0px;
      justify-content: space-between;
    }
    .service-content {
      padding: 100px 60px 0 90px;
    }
    .service-content-title {
      font-family: Montserrat;
      font-size: 23px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      margin-left: 53px;
      margin-bottom: 40px;
    }
    .arrow-link {
      font-size: 17px;
    }
    .main-content-container {
      align-items: flex-start;
    }

  }
@media (min-width: 1400px) {
  #services_section .decoration-container {
    display: flex;
    align-items: flex-start;
    margin-top: -135px;
    justify-content: space-between;
  }
}
</style>
