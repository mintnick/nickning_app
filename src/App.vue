<script setup>
import LanguagesBtnGroup from './components/LanguagesBtnGroup.vue'

// vue cookie
import { inject } from 'vue'
const $cookies = inject('$cookies');

// i18n
import { useI18n } from 'vue-i18n';
const i18n = useI18n();

// load lang from cookie
i18n.locale.value = $cookies.get('lang') ?? 'en';
</script>

<template>
  <LanguagesBtnGroup />

  <div>
    <img src="./assets/images/logos/N-transparent.png" />
    <h1>{{ $t('site_title') }}</h1>
  </div>


</template>

<style scoped>
</style>
