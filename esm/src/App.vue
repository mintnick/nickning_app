<script setup>
const langs = [
  {
    label: 'English',
    value: 'en'
  },
  {
    label: '简体中文',
    value: 'zh'
  }
];
</script>

<template>
  <div class="row justify-between">

    <div class="col-2"></div>
    <div class="col-8 text-center">
      <h4 class="q-my-md">{{ $t("title") }}</h4>
      <span>{{ $t("intro") }}</span>
    </div>
    <div class="col-2 row items-center text-right">
      <q-select
        outlined
        dense
        options-dense
        v-model="$i18n.locale"
        :options="langs"
        emit-value
        map-options
        @update:model-value="toggle_lang"
      />
    </div>
  </div>
  <hr />

  <h5>{{ $t("download") }}</h5>
  <ul>
    <li>1</li>
    <li>1</li>
    <li>1</li>
  </ul>
  <hr />

  <h5>{{ $t("manual") }}</h5>
  <hr />

  <h5>{{ $t("video") }}</h5>
  <hr />
</template>

<style scoped>
</style>
