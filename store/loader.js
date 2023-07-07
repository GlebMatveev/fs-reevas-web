import { defineStore } from "pinia";

export const useLoaderStore = defineStore("loadertore", () => {
  const loaderForContent = ref(false);

  return { loaderForContent };
});
