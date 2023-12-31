import { defineStore } from "pinia";
import { useFilterStore } from "@/store/filter";
import { useLoaderStore } from "@/store/loader";

export const useProductStore = defineStore("productStore", () => {
  // Stores
  const filterStore = useFilterStore();
  const loaderStore = useLoaderStore();

  // Environment Variables
  const runtimeConfig = useRuntimeConfig();

  // Auth data
  const basicAuth = {
    Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
  };

  // State
  const products = ref();

  // Actions
  async function getProducts() {
    loaderStore.loaderForContent = true;

    await $fetch("/products", {
      headers: basicAuth,
      method: "POST",
      baseURL: runtimeConfig.public.apiBase,
      body: filterStore.filters,
    }).then(function (response) {
      products.value = response;
      loaderStore.loaderForContent = false;
    });
  }

  return { products, getProducts };
});
