<template>
  <div id="footer">
    <footer class="footer">
   <img class="footer-logo" src="../../assets/images/footer-logo.png" width="210px">
       <Navigation/>
      <div class="final-signature"><img class="footer-icon" src="../../assets/icons/footer-icon.png" width="14px"><p class="footer-text">ALL RIGHTS RESERVED</p></div>
    </footer>
  </div>
</template>

<script>
import Navigation from "@/components/Header/Navigation/Navigation.vue";

export default {
  components: {
     Navigation,
  }
}

</script>

<style>
.footer {
  padding :31px 0 50px 20px;

}
#footer {
  background-color: rgba(255, 255, 255, 0.34);
}
.footer-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  text-transform: uppercase;
  margin-bottom: 0;
}
.final-signature {
  display: flex;
  align-items: center;
}
.final-signature img {
margin-right: 10px;
}
@media (min-width: 992px) {

  .footer {
    display: flex;
    align-items: center;
  }
  .footer-logo {
    margin-left: 5%;
  }
  .footer div {
    width: 60%;
  }

  .footer div.final-signature {
    width: 30%;
  }

  .final-signature img {
    width: 14px;
  }

  .final-signature .footer-text {
    font-size: 11px!important;
  }
  .footer .centered {
    width: 60%;
    display: block;
    margin: 0 auto;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-right: -50%;
  }

  .footer {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0;
    height: 96px;
  }
  .social-network-item img {
    width: 28px;
  }
  .social-networks-list {
    display: flex;
    width: 200px;
    justify-content: space-evenly;
    margin: 8px auto 0;
  }
}
</style>
