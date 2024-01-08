<script setup>
import LanguagesBtnGroup from './components/LanguagesBtnGroup.vue'
import Section from './components/Section.vue'

// load lang from cookie
import { inject } from 'vue'
const $cookies = inject('$cookies');
import { useI18n } from 'vue-i18n';
const i18n = useI18n();
i18n.locale.value = $cookies.get('lang') ?? 'en';

// load projects
import projects from './assets/projects.json'

</script>

<template>
  <LanguagesBtnGroup />

  <div id="header">
    <img src="/images/logos/N-transparent.png" />
    <h1>{{ $t('site_title') }}</h1>
  </div>

  <Section v-for="project in projects" 
  :section_name="project.section_name" :section_logo="project.section_logo" :items="project.items"/>
</template>

<style scoped>
#header > img {
  height: 120px;
}
</style>
