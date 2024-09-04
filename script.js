const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('内贸海运流程(想象)');
      const chapter = ref(0);
      const style = ref(true);
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

      function changeTheme() {
          if(style.value == true){
             document.getElementById('theme').href = 'styles.css'
             style.value = !style.value
          }
          else{
             document.getElementById('theme').href = 'styles2.css'
             style.value = !style.value
          }

      }

      return {
        message,
        chapter,
        nextStep,
        foreStep,
        changeTheme
      }
    }
  }).mount('#app')