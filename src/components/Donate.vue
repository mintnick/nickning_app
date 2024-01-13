<script setup>
import { ref } from 'vue'

const tab = ref(null);

const payments = [
  {
    "value": "patreon",
    "image": "",
  },
  {
    "value": "alipay",
    "image": "alipay",
  },
  {
    "value": "wechat",
    "image": "wechat",
  },
];
</script>

<template>
  <h1 class="d-flex align-center justify-center mb-5"><img src="/images/logos/donate.svg" class="title-img" />{{ $t("donate") }}</h1>
  <div class="text-h5">
    <p>{{ $t("donate-1") }}<a href="/" target="_blank" class="highlight">{{ $t("donate-2") }}</a>{{ $t("donate-3") }}</p>
    <p>{{ $t("donate-4") }}</p>
  </div>

  <v-tabs
    v-model="tab"
    color="deep-purple-accent-4"
    align-tabs="center"
    class="mt-10"
    >
    <v-tab v-for="payment in payments" :value="payment.value" class="text-none text-h6">{{ $t(payment.value) }}</v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item
      v-for="payment in payments"
      :key="payment.value"
      :value="payment.value"
    >
    {{ $t(payment.value) }}
    </v-window-item>
  </v-window>
</template>

<style scoped>

</style>