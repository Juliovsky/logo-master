<template>
  <div id="contacts_section" class="container" name="contacts_section">
    <img src="../../assets/images/contacts-title.png" width="197px" class="contacts_section_title">
    <ul class="contracts-list">
      <li class="contact-list-item">
        <h5 class="contact-title">Телефон</h5>
        <a href="tel:380993836702" class="phone-number">+380 99 38 36 702</a>
      </li>
      <li class="contact-list-item">
        <h5 class="contact-title">E-MAIL</h5>
        <a href="mailto: logoswake@gmail.com" class="email">logoswake@gmail.com</a>
      </li>
      <li class="contact-list-item">
        <h5 class="contact-title">Соцсети</h5>
       <SocialIcons/>
      </li>
    </ul>
  </div>
</template>

<script>
import SocialIcons from './SocialIcons.vue';
export default {
  components: {
    SocialIcons
  }
}

</script>

<style>
.social-networks-list, .contracts-list {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}
a {
  color: black;
  text-decoration: none;
}

.contacts_section_title {
  margin: 100px auto 26px auto;
}
.contact-title {
  font-family: "Mak";
  text-transform: uppercase;
  font-size:30px;
  font-weight: 300;
  line-height: 36px;
  margin-bottom: 8px;
}
.phone-number, .email {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: black;
  text-decoration: none;
}
.contact-list-item {
  margin-bottom: 40px;
}
.social-networks-list {
  display: flex;
  width: 213px;
  justify-content: space-between;
}
.contracts-list {
  margin-bottom: 16px;
}
@media (min-width: 768px) {
  .contacts_section_title {
    margin: 100px auto 40px auto;
    width: 263px;
  }

  .contracts-list {
    text-align: center;
  }

  .contact-title {
    font-size: 30px;
  }

  .phone-number, .email {
    font-size: 20px;
  }

  .contracts-list .contact-list-item:last-child {
    margin-top: 60px;
  }

  .social-networks-list {
    display: flex;
    width: 358px;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-top: 11px;
  }

  .social-network-item img {
    width: 42px;
  }

  .footer-logo {
    width: 296px;
    margin: 0 auto;
  }

  .footer .scrollactive-nav {
    display: flex;
    flex-wrap: nowrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    max-width: 591px;
    margin: 36px auto;
  }

  .footer .scrollactive-nav a {
   font-size: 16px;
  }
  .final-signature img {
    width: 24px;
  }
  .footer-text  {
    font-size: 24px!important;
  }
  .final-signature {
    display: flex;
    align-items: center;
    justify-content: center!important;
  }
}
@media (min-width: 992px) {
  .contracts-list .contact-list-item:last-child {
    margin-top: 0px;
  }
  .contact-list-item {
    width: 30%;
  }
  .contracts-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

 </style>
