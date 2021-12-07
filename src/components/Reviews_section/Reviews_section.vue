<template>
  <div  id="reviews-section" name="reviews-section" class="container">
    <img src="../../assets/images/review-title.png" width="165px" class="review_section_title">
    <b-carousel
        v-if="isMobile || isTablet"
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="transparent"
        img-width="338"
        img-height="480"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">
        <h5 class="review-name">Анастасия К.</h5>
        <p class="review-text">знаешь, вот уже месяц слушаю марафон Блиновской и результата для себя ноль (постоянное ощущение что ничего нового я не узнаю. Пока в хрупком равновесии ищу баланс, но мне так нравится)</p>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">
        <h5 class="review-name">Новицька Тетяна</h5>
        <p class="review-text">Була скептична, але коли мені постійно в голові був фіолетовий колір і він як вогник мигав, кружляв, я відчувала тебе, може це і не так, але мені принаймі хотілось так думати, потім я бачила жовтий вогник і було так тепло, я відчувала в руках і ногах таке тепло. Дякую велике, що поділилась такою технікою і показала її. Я вражена!</p>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">
        <h5 class="review-name">Карина Андреева</h5>
        <p class="review-text">Валя, у нас был сеанс - честный, отрезвляющий, эмоциональный, дающий нужную пощечину, и в то же время безусловно с любовью, поддерживающий, энергетически заряженый! Мне очень понравился режим работы. Там, где мне хотелось увильнуть или я неосознанно отходила от курса, ты сразу возвращала в тему.
        </p>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide
          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">
        <h5 class="review-name">Аделина Новак</h5>
        <p class="review-text">Получила мощный заряд практики с энергетическим центром, или общение, проработка и обмен энергиями с тобой в ходе сеанса, или все все вместе - честное слово - дало мне тааакой толчок!!! Я спала и тонула в собственном болоте из говна на протяжении нескольких месяцев. Выбирать честность, выбирать себя!</p>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide
          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">
        <h5 class="review-name">Алиса </h5>
        <p class="review-text">При медитации мне было максимально трудно) Раздражающих факторов становилось все больше, но через какое-то время отпустило) По ощущениям на половине, минут через 7 успокоилась и отошла от этого всего) И появился свет, который то приходил, то уходил) Как в окно иногда солнышко заглядывает через облака, так и тут было)</p>
      </b-carousel-slide>

      <b-carousel-slide
          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">
        <h5 class="review-name">Ярослава Городенко </h5>
        <p class="review-text">Благодарю, Валюша, за такую чудесную практику, за то, что направила и с терпением ответила на все повторяьщиеся вопросы</p>
      </b-carousel-slide>

      <b-carousel-slide
          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">
        <h5 class="review-name">Ярослава Городенко </h5>
        <p class="review-text">Валя, привет. Состояние внутреннего
          спокойствия. Вчера во время практики
          меня покачивало, подумала, что это просто расслабленное состояние было. Со вчера в какие то моменты меня покачивает 5-7
          минут точно качает, неосознанно... просто
          так)) и останавливаться не хочется)
          Это благодаря ТЕБЕ!
        </p>
      </b-carousel-slide>

      <b-carousel-slide
          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">
        <h5 class="review-name">Алексей</h5>
        <p class="review-text">Ты помогла вытащить с мозгов то, что
          нужно было ещё давно достать
          Так что ты на верном пути
        </p>
      </b-carousel-slide>
    </b-carousel>
    <b-carousel
        v-if="isDesktop"
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="transparent"
        img-width="338"
        img-height="480"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
<!--          img-src="https://listimg.pinclipart.com/picdir/s/140-1402686_clock-clipart-animation-clock-cartoon-png-gif-transparent.png">-->
       <ul class="review-list">
         <li class="review-list-item">
        <h5 class="review-name">Анастасия К.</h5>
        <p class="review-text">знаешь, вот уже месяц слушаю марафон Блиновской и результата для себя ноль (постоянное ощущение что ничего нового я не узнаю. Пока в хрупком равновесии ищу баланс, но мне так нравится)</p>
        </li>
         <li class="review-list-item">
           <h5 class="review-name">Новицька Тетяна</h5>
           <p class="review-text">Була скептична, але коли мені постійно в голові був фіолетовий колір і він як вогник мигав, кружляв, я відчувала тебе, може це і не так, але мені принаймі хотілось так думати, потім я бачила жовтий вогник і було так тепло, я відчувала в руках і ногах таке тепло. Дякую велике, що поділилась такою технікою і показала її. Я вражена!</p>
         </li>
         <li class="review-list-item">
           <h5 class="review-name">Карина Андреева</h5>
           <p class="review-text">Валя, у нас был сеанс - честный, отрезвляющий, эмоциональный, дающий нужную пощечину, и в то же время безусловно с любовью, поддерживающий, энергетически заряженый! Мне очень понравился режим работы. Там, где мне хотелось увильнуть или я неосознанно отходила от курса, ты сразу возвращала в тему.</p>
         </li>

        </ul>
            </b-carousel-slide>

      <!-- Slides with custom text -->

      <!-- Slides with image only -->
<!--      <b-carousel-slide-->
<!--          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">-->
<!--        <h5 class="review-name">Карина Андреева</h5>-->
<!--        <p class="review-text">Валя, у нас был сеанс - честный, отрезвляющий, эмоциональный, дающий нужную пощечину, и в то же время безусловно с любовью, поддерживающий, энергетически заряженый! Мне очень понравился режим работы. Там, где мне хотелось увильнуть или я неосознанно отходила от курса, ты сразу возвращала в тему.-->
<!--        </p>-->
<!--      </b-carousel-slide>-->

<!--      &lt;!&ndash; Slides with img slot &ndash;&gt;-->
<!--      &lt;!&ndash; Note the classes .d-block and .img-fluid to prevent browser default image alignment &ndash;&gt;-->
<!--      <b-carousel-slide-->
<!--          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">-->
<!--        <h5 class="review-name">Аделина Новак</h5>-->
<!--        <p class="review-text">Получила мощный заряд практики с энергетическим центром, или общение, проработка и обмен энергиями с тобой в ходе сеанса, или все все вместе - честное слово - дало мне тааакой толчок!!! Я спала и тонула в собственном болоте из говна на протяжении нескольких месяцев. Выбирать честность, выбирать себя!</p>-->
<!--      </b-carousel-slide>-->

<!--      &lt;!&ndash; Slide with blank fluid image to maintain slide aspect ratio &ndash;&gt;-->
<!--      <b-carousel-slide-->
<!--          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">-->
<!--        <h5 class="review-name">Алиса </h5>-->
<!--        <p class="review-text">При медитации мне было максимально трудно) Раздражающих факторов становилось все больше, но через какое-то время отпустило) По ощущениям на половине, минут через 7 успокоилась и отошла от этого всего) И появился свет, который то приходил, то уходил) Как в окно иногда солнышко заглядывает через облака, так и тут было)</p>-->
<!--      </b-carousel-slide>-->

<!--      <b-carousel-slide-->
<!--          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">-->
<!--        <h5 class="review-name">Ярослава Городенко </h5>-->
<!--        <p class="review-text">Благодарю, Валюша, за такую чудесную практику, за то, что направила и с терпением ответила на все повторяьщиеся вопросы</p>-->
<!--      </b-carousel-slide>-->

<!--      <b-carousel-slide-->
<!--          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">-->
<!--        <h5 class="review-name">Ярослава Городенко </h5>-->
<!--        <p class="review-text">Валя, привет. Состояние внутреннего-->
<!--          спокойствия. Вчера во время практики-->
<!--          меня покачивало, подумала, что это просто расслабленное состояние было. Со вчера в какие то моменты меня покачивает 5-7-->
<!--          минут точно качает, неосознанно... просто-->
<!--          так)) и останавливаться не хочется)-->
<!--          Это благодаря ТЕБЕ!-->
<!--        </p>-->
<!--      </b-carousel-slide>-->

<!--      <b-carousel-slide-->
<!--          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">-->
<!--        <h5 class="review-name">Алексей</h5>-->
<!--        <p class="review-text">Ты помогла вытащить с мозгов то, что-->
<!--          нужно было ещё давно достать-->
<!--          Так что ты на верном пути-->
<!--        </p>-->
<!--      </b-carousel-slide>-->
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      isMobile: (window.innerWidth < 768) ? true : false,
      isTablet: (992 < window.innerWidth >= 768) ? true : false,
      isDesktop: (window.innerWidth >= 992) ? true : false
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style>
.sr-only {
  display: none;
}
.carousel-caption {
  top: 0;

}
.review_section_title {
  margin: 42px auto 25px auto ;
}
.carousel-item  .img-fluid {
  width: 338px !important;
  margin: 0 auto;
  height:  338px;
}
.review-name {
  color: black;
  font-size: 21px;
  font-weight: 300;
  margin-bottom: 10px;
  width: 85%;
  font-family: 'Mak';
}


.review-text {
  color: black;
  font-size: 13px;
  font-weight: 400;
  width: 85%;
}
.carousel-caption {
  color: black!important;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20%!important;
  left: 15%;
  padding-top: 2.25rem!important;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}

.carousel-control-prev-icon {
  background-image: url('../../assets/icons/arrow-left(4).png')!important;
  width: 61px!important;
  height:42px!important;
}

.carousel-control-next-icon {
  background-image: url('../../assets/icons/arrow-right(4).png')!important;
  width: 61px!important;
  height:42px!important;
}

.carousel-control-prev, .carousel-control-next {

  width: 19%!important;
  opacity: 1!important;
}

@media (min-width: 768px) {

  .carousel-item .img-fluid {
    width: 454px !important;
    margin: 0 auto;
  }

  .review-name {
    font-size: 36px;
  }

  .review-text {
    font-size: 17px;
    width: 58%;
  }
}
  @media (min-width: 992px) {
   .review-list-item {
     background-image: url("https://i.ibb.co/0K2mrZV/Rectangle-6.png");
     background-position: center;
     background-repeat: no-repeat;
     width: 338px;
     height: 331px;
     padding: 33px;
   }
    .review-list {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .review-text {
      font-size: 14px;
      width: 100%;
    }
    .review-name {
      font-family: Mak;
      font-size: 21px;
      font-style: normal;
      font-weight: 300;
      line-height: 47px;
      letter-spacing: 0.035em;
      display: block;
      margin: 0 auto;
    }

    .carousel-item {
      height: 370px!important;
    }
    .carousel-control-prev, .carousel-control-next {
      width: 10%!important;
    }
    .carousel-caption {
      right: 8%!important;
      left: 8%!important;
      height: 370px;

    }

  }
@media (min-width: 1240px) {
  .review-name {
    font-size: 24px;
  }
}
</style>