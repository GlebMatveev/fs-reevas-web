<script setup>
// Stores
import { useCartStore } from "@/store/cart";
const cartStore = useCartStore();

const currencies = [
  {
    code: "USD",
    rate: 1.0,
  },
  {
    code: "EUR",
    rate: 1.09,
  },
];
</script>

<template>
  <label class="currency">
    <select
      class="currency__wrapper"
      name="currency"
      id="currency"
      v-model="cartStore.currentCurrency"
    >
      <option
        v-for="item in currencies"
        :value="item"
      >
        {{ item.code }}
      </option>
    </select>
  </label>
</template>

<style lang="scss" scoped>
.currency {
  display: flex;
  align-items: center;

  &__wrapper {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #3a3a44;
    background-color: transparent;
    border: none;
    outline: none;

    cursor: pointer;
  }
}
</style>
