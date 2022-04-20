<template>
  <div class="">
    <div class="p-2 text-xl lg:text-3xl text-center bg-pink-500 text-white">{{ name }}</div>
    <div 
      class="w-56 h-56 lg:w-72 lg:h-72 flex items-end" 
      :style="{ background: 'url(\'' + require(`@/assets/img/${img}`) + '\')', backgroundSize: 'contain' }"
    >
      <div class="text-xl lg:text-3xl py-1 bg-blur flex flex-grow justify-center items-center">
        <div>
          {{ price + 'zł' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    name: String,
    price: String,
    img: String
  }
}
</script>