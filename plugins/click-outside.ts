export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", {
    mounted(el, binding) {
      const handler = (event: Event) => {
        if (el.contains(event.target)) {
          return;
        }
        binding.value(event);
      };
      document.addEventListener("click", handler);
      el.addEventListener("click", handler);
    },

    unmounted(el) {
      document.removeEventListener("click", el.click);
      el.removeEventListener("click", el.click);
    },
  });
});
