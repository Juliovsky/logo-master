<template>
  <div>
   <header v-if="isMobile || isTablet">
    <nav class="navigation container">
    <Slide width="120">
      <a id="home" href="#">
        <Navigation/>
      </a>
    </Slide>
    <a href="/" class="logo"><img src="../../assets/images/logo.png" alt="logo" width="177px"></a>
    <a href="tel:380993836702" class="phone-number-icon" v-if="isMobile"><img src="../../assets/icons/phone.png" width="34px"/></a>
    <a href="tel:380993836702" class="phone-number-link" v-if="isTablet">+38 099 383 6702</a>
    </nav>
   </header>
   <header v-if=isDesktop>
     <div class="container">
      <Navigation/>
     <a href="/" class="logo"><img src="../../assets/images/logo.png" alt="logo" width="177px"></a>
     <div class="left-side-content">
     <a href="tel:380993836702" class="phone-number-link">+38 099 383 6702</a>
       <div class="online-container"><img src="../../assets/icons/location-icon.png" width="11px">ONLINE</div>
     </div>
     </div>
   </header>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';
import Navigation from "@/components/Header/Navigation/Navigation";

export default {
  components: {
    Slide,
    Navigation
  },
  data: function () {
    return {
      isMobile: (window.innerWidth < 768)?true:false,
      isTablet:(992 < window.innerWidth >= 768)?true:false,
      isDesktop:(window.innerWidth >= 992)?true:false
    }
  },

}
</script>

<style>
.bm-burger-bars {
  height: 2px!important;
}
.phone-number-icon {
  height: 100%;
}
.bm-burger-button {
  cursor: pointer;
  height: 18px;
  width: 25px!important;
  left: 20px;
  position: absolute;
  top: 54px;
}
.navigation {
  display: flex;
  width: 100%;
   justify-content: space-around;
  align-items: center;
}
header {
  height: 112px;
  display: flex;
  align-items: center;
}

.bm-menu {
  background-color: #FBF7F3;
  height: auto;
  left: 0;
  overflow-x: hidden;
  padding-top: 0!important;
  position: fixed;
  top: 0;
  transition: .5s;
  z-index: 1000;
}

a:hover {
  color: #604CC4!important;
}

@media (min-width: 768px) {
  .logo img {
    width: 237px !important;
  }

  .bm-burger-bars {
    height: 3px !important;
  }

  .bm-burger-button {
    cursor: pointer;
    height: 26px;
    width: 35px !important;
    left: 31px;
    position: absolute;
    top: 54px;
  }

  .phone-number-link {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    color: black;
    text-decoration: none;
    font-family: 'Montserrat';
  }

  .navigation {
    justify-content: space-between;
  }

  .logo {
    position: absolute;
    transform: translate(91%, 14%);
  }

  .phone-number-link {
    margin-top: 20px;
  }
}

  @media (min-width: 992px) {

    header {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    .nav a:last-child {
      margin-bottom: 0px;
    }

    .nav a {
      margin-bottom: 0px;
    }

    header .nav {
      align-items: center;
    }


    .logo {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }


    header .nav {
      display: flex;
      flex-wrap: nowrap;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      width: 100%;
    }

    header .container div {
      width: 37%;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 15px;
      letter-spacing: 0em;
      text-align: left;
    }

    header .container div nav {
      width: 100%;
      display: flex;
      align-items: center;
      height: 100%;
      margin-top: 0;
    }

    .online-container {
      display: flex;
      align-items: baseline;
    }

    .left-side-content {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      flex-direction: row-reverse;
    }

    header .container {
      display: flex;
      justify-content: space-between;
    }

    .phone-number-link {
      margin-top: 0;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: 0em;
      text-align: left;
    }

    header .container .left-side-content {
      width: 20%;
    }
  }

</style>
