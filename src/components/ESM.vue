<script setup>
const url_github = 'https://github.com/mintnick/eve-settings-manager/releases/tag/v1.0.1';
const url_baidu = 'https://pan.baidu.com/s/10TI8L9N-89Cw8awIAjOuFg?pwd=9qva';
const url = 'https://github.com/mintnick/eve-settings-manager'
</script>

<template>
  <div class="text-grey-darken-3">
    <h1 class="text-center">{{ $t('esm') }}</h1>
    <div class="d-flex justify-center"><img src="/images/screenshots/esm.png" class="screenshot"/></div>
    <h2>{{ $t('download') }}</h2>
    <ul>
      <li><a :href="url_github" class="highlight">GitHub</a></li>
      <li><a :href="url_baidu" class="highlight">百度网盘</a></li>
    </ul>
    <h2>{{ $t('intro') }}</h2>
    <ul>
      <li>{{ $t('esm-1') }}</li>
      <li>{{ $t('esm-2') }}</li>
      <li>{{ $t('esm-3') }}</li>
      <li>{{ $t('esm-4') }}</li>
    </ul>
    {{ $t('more') }}
    <a :href="url" class="highlight">GitHub page</a>
    <h2><a href="/donate/" class="highlight">{{ $t('donate') }}</a></h2>
  </div>
</template>

<style scoped>

</style>
