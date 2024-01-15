<script setup>
import { ref } from 'vue'

const tab = ref(null);

const payments = [
  {
    "value": "patreon",
    "url": "patreon.com/nickning",
    "color": "deep-purple-accent-4",
  },
  {
    "value": "paypal",
    "url": "https://www.paypal.com/paypalme/nickningapps",
    "color": "#2385BB",
  },
  {
    "value": "alipay",
    "image": "alipay.JPG",
    "color": "#166CFF",
  },
  {
    "value": "wechat",
    "image": "wechat.JPG",
    "color": "#09B855",
  },
];
</script>

<template>
  <h1 class="d-flex align-center justify-center mb-5"><img src="/images/logos/donate.svg" class="title-img" />{{ $t("donate") }}</h1>
  <div class="text-h5">
    <p>{{ $t("donate-1") }}
      <a href="/" target="_blank" class="highlight">{{ $t("donate-2") }}</a>
    </p>
    <p>{{ $t("donate-3") }}</p>
    <p>{{ $t("donate-4") }}</p>
  </div>

  <v-tabs
    v-model="tab"
    color="deep-purple-accent-4"
    align-tabs="center"
    class="mt-10"
    >
    <v-tab v-for="payment in payments"
    :value="payment.value"
    :color="payment.color"
    class="text-none text-h6">
    {{ $t(payment.value) }}</v-tab>
  </v-tabs>
  
  <v-window v-model="tab">
    <v-window-item
      v-for="payment in payments"
      :value="payment.value"
    >
    <div class="d-flex justify-center">
      <v-btn
        v-if="payment.url"
        size="x-large"
        class="my-10"
        rounded="xl"
        elevation="12"
        :color="payment.color"
        >{{ $t(payment.value) }}
      </v-btn>
      <img v-if="payment.image" class="payment-img" :src="`/images/payments/${payment.image}`" />
    </div>
    </v-window-item>
  </v-window>
</template>

<style scoped>
.payment-img {
  height: 300px;
}
</style>