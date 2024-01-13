<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column justify-center align-center">
        <div class="mt-4">
          <v-btn class="mr-2" variant="outlined" @click="change_lang('en')">English</v-btn>
          <v-btn class="ml-2" variant="outlined" @click="change_lang('zh')">简体中文</v-btn>
        </div>
        <a href="/" class="">
          <img src="/images/logos/N-transparent.png" class="header-img"/>
        </a>
      </div>

      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
// vue cookie
import { inject } from 'vue'
const $cookies = inject('$cookies')

// i18n
import { useI18n } from 'vue-i18n';
const i18n = useI18n();

i18n.locale.value = $cookies.get('lang') ?? 'en';

function change_lang(lang) {
  i18n.locale.value = lang;
  $cookies.set('lang', lang);
}
</script>

<style scoped>
.header-img {
  height: 140px;
}
</style>