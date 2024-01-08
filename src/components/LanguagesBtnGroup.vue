<script setup>
// vue cookie
import { inject } from 'vue'
const $cookies = inject('$cookies');

// i18n
import { useI18n } from 'vue-i18n';
const i18n = useI18n();

function change_lang(lang) {
  i18n.locale.value = lang;
  $cookies.set('lang', i18n.locale.value);
}
</script>

<template>
  <div id="lang-group">
    <button @click="change_lang('en')">English</button>
    <button @click="change_lang('zh')">简体中文</button>
  </div>
</template>

<style>
#lang-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

#lang-group > button {
  height: 30px;
  font-size: 1em;
  border-radius: 5px;
  border: none;
  background-color: #EEEEEE;
}
</style>