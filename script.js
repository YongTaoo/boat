const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('内贸海运流程(想象)');
      const chapter = ref(0);
      function nextStep() {
          if(chapter.value < 8) {
             chapter.value++;
          }
      }

      function foreStep() {
         if(chapter.value > 0) {
            chapter.value--;
         }
      }

      return {
        message,
        chapter,
        nextStep,
        foreStep
      }
    }
  }).mount('#app')