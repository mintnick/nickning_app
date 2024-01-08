<script setup>
const props = defineProps(["section_name", "section_logo", "items"]);
</script>

<template>
  <h2>{{ $t(section_name) }}</h2>
</template>