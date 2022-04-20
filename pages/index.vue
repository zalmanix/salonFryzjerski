<template>
  <div>
    <div class="card w-min-content flex flex-col mx-auto justify-center items-center">
      <span class="bg-blur text-5xl md:text-8xl p-5 whitespace-nowrap">Sylwia Bałdo</span>
      <span class="bg-pink-500 w-full p-1 text-xl md:text-3xl text-center text-white">Salon Fryzjerski</span>
    </div>
    <div class="main-bg">
    </div>
    <div
      class="bg-blur text-center pb-10 px-6 lg:px-28 flex flex-col justify-center items-center"
      ref="scrollTo"
    >
      <font-awesome-icon 
        icon="fa-solid fa-caret-down" 
        size="3x" 
        class="mb-5 cursor-pointer scroll-to transition-all ease-out duration-300" 
        @click="scrollDown()" 
        :class="scrollCheck ? 'transform rotate-180' : ''"
      />

      <h1>O nas</h1>
      <p class="text-base lg:text-lg xl:text-2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat rerum harum facere in tenetur. Earum rerum quae in officiis minus accusamus eius ab, temporibus adipisci quam dolores illum, maxime ratione.
        Sit atque alias, aliquam voluptatum nobis nihil provident recusandae neque eveniet facere sed hic suscipit vel minima. Ex, quasi? Quae, amet quas laudantium voluptates ducimus maiores suscipit eum rerum iusto!
        Quod aspernatur nesciunt facere voluptas molestiae excepturi ea, mollitia, aut eveniet praesentium soluta error, ad quisquam iure vero eum tenetur voluptates deserunt ducimus unde delectus non laudantium architecto voluptate? Dolor.
        Reprehenderit quidem eveniet autem, praesentium nihil veniam maxime nostrum beatae nesciunt eligendi voluptates. Vel quae eveniet provident facilis voluptas libero repudiandae. Nemo dolore at doloremque ex molestiae. Aut, deleniti debitis.
      </p>
    </div>

    <div class="bg-gray-100 p-10 border-t flex flex-col justify-center items-center">
      <h1>Cennik</h1>

      <div class="2xl:w-3/4 flex flex-row flex-wrap justify-center items-center mt-5">
        <panel 
          v-for="(price, i) in prices" 
          :key="i" 
          :name="price.name" 
          :price="price.price" 
          :img="price.img"
          class="m-1 lg:m-2"
        />
      </div>
    </div>
    <div class="bg-blur p-5 flex flex-col justify-center items-center">
      <h1>Zapraszamy!</h1>
      <div class="flex flex-col md:flex-row items-top w-full h-100 md:w-4/5 xl:w-3/5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.862773579007!2d20.51270831586922!3d49.9201504333133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471623fac6052c2b%3A0x901465c15951d230!2sKobyle%20297%2C%2032-720%20Kobyle!5e0!3m2!1spl!2spl!4v1650461456860!5m2!1spl!2spl" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="flex-grow mx-4 sm:mx-10 md:mx-0"></iframe>
        <p class="md:w-1/3 text-lg mx-4 sm:mx-0 md:ml-10 mt-10 md:mt-0 text-center md:text-left">
          <b>Adres:</b> Kobyle 297, 32-720 Nowy Wiśnicz
          <br />
          <b>Telefon:</b> 784 554 540
          <br />
          <br />
          <b>Godziny otwarcia:</b>
          <br />
          poniedziałek - piątek:
          <br />
          <i>15:00 - 19:00</i>
          <br />
          sobota:
          <br />
          <i>9:00 - 14:00</i>
        </p> 
      </div>
    </div>
    <footer class="py-3 bg-gray-900 text-white text-xl text-center">
      Sylwia Bałdo
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Panel from '../components/Panel.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

export default {
  components: { Panel },
  name: 'IndexPage',
  data: () => ({
    prices: [
      {
        name: 'Farbowanie',
        price: '10',
        img: 'img_1.jpg'
      },
      {
        name: 'Farbowanie włosów',
        price: '10',
        img: 'img_1.jpg'
      },
      {
        name: 'Farbowanie',
        price: '10',
        img: 'img_1.jpg'
      },
      {
        name: 'Farbowanie włosów',
        price: '10',
        img: 'img_1.jpg'
      },
      {
        name: 'Farbowanie włosów',
        price: '10',
        img: 'img_1.jpg'
      },
      {
        name: 'Farbowanie włosów',
        price: '10',
        img: 'img_1.jpg'
      }
    ],
    scrollPos: 1,
    btnPressed: false
  }),
  computed: {
    scrollCheck() {
      if(this.btnPressed == true || this.scrollPos <= 0)
      {
        return true;
      }
      return false;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

     this.scrollPos = this.$refs.scrollTo.getBoundingClientRect().top;
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollDown() {
      const el = this.$refs.scrollTo;

      if(this.scrollPos > 0) {
        if(this.btnPressed){
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.btnPressed = false;
        }
        else {
          el.scrollIntoView({ behavior: 'smooth' });
          this.btnPressed = true;
        }
      }
      else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    handleScroll() {
      this.scrollPos = this.$refs.scrollTo.getBoundingClientRect().top;

      if(this.scrollPos <= 0) {
        this.btnPressed = false;
      }
    }
  }
}
</script>

<style scoped>
.main-bg {
  width: 100%;
  height: 100vh;
  background: url("@/assets/img/main_bg.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.card {
  height: calc(100vh - 48px);
}
</style>