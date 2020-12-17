<template>
  <div class="flex flex-wrap w-full relative">
    <div
      class="absolute w-full"
      v-for="(slider, index) in sliders"
      :key="slider"
    >
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          :class="slider"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          @click="makeActive(index)"
          :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 mx-2 rounded-full bg-black cursor-pointer shadow-md"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: ["bg-green-600", "bg-blue-600", "bg-yellow-600"],
      interval: "",
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % 3;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
