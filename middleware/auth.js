import { usePopupStore } from "@/store/popup";

export default defineNuxtRouteMiddleware((to, from) => {
  // Stores
  const popupStore = usePopupStore();

  // Environment Variables
  const runtimeConfig = useRuntimeConfig();

  // Auth data
  const basicAuth = {
    Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
  };

  function showPopupSignIn() {
    popupStore.popupSignUp = false;
    popupStore.popupSignIn = true;
  }

  // no authorization
  if (!localStorage.userId || !localStorage.userToken) {
    showPopupSignIn();
    return navigateTo(from);
    // if there is authorization data
  } else if (localStorage.userId && localStorage.userToken) {
    let checkToken = {
      userId: localStorage.userId,
      userToken: localStorage.userToken,
    };

    $fetch("/auth/token", {
      headers: basicAuth,
      method: "POST",
      baseURL: runtimeConfig.public.apiBase,
      body: checkToken,
    })
      .then((response) => {
        // code = 0 - token expired
        // code = 1 - token is up to date
        if (response.code == 0) {
          showPopupSignIn();
          return navigateTo(from);
        } else if (response.code == 1) {
          return true;
        }
      })
      .catch((error) => {
        console.log(error);
        return navigateTo("/");
      });
  }
});
