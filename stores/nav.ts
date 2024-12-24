import { defineStore } from "pinia";

export const useNavigationStore = defineStore("nav", () => {
  const isActiveMobileMenu = ref(false);

  function toggle() {
    isActiveMobileMenu.value = !isActiveMobileMenu.value;
  }

  return { isActiveMobileMenu, toggle };
});
