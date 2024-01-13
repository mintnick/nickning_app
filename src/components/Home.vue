<script setup>
const projects = [
  {
    // EVE Online
    "section_name": "eve-online",
    "section_logo": "eve_online.png",
    "items": [
      {
        "item_name": "eve-at-draft",
        "item_logo": "atdraft_logo_red.png",
        "item_url": "https://nickning.app/atdraft/",
        "item_description": "eve-at-draft-desc"
      },
      {
        "item_name": "esm",
        "item_logo": "esm_logo.png",
        "item_url": "/esm/",
        "item_description": "esm-desc"
      },
      {
        "item_name": "campaigns",
        "item_logo": "campaigns_logo.svg",
        "item_url": "https://nickning.app/campaigns/",
        "item_description": "campaigns-desc"
      },
      // {
      //   "item_name": "evehu",
      //   "item_logo": "evehu_logo.svg",
      //   "item_url": "https://nickning.app/evehu/",
      //   "item_description": "evehu-desc",
      // }
    ]
  },

  // Chrome extensions
  {
    "section_name": "chrome",
    "section_logo": "chrome-extensions.png",
    "items": [
      {
        "item_name": "xyzdl",
        "item_logo": "xyzdl_logo.png",
        "item_url": "/xyzdl/",
        "item_description": "xyzdl-desc"
      }
    ]
  },
];

const social_links = [
  {
    "name" : "GitHub",
    "logo" : "github.svg",
    "url" : "https://github.com/mintnick",
  },
  {
    "name" : "blog",
    "logo" : "blog_logo.png",
    "url" : "https://nickning.me",
  },
  {
    "name" : "douban",
    "logo" : "douban_logo.png",
    "url" : "https://douban.com/people/MintNick",
  },
  {
    "name" : "bili",
    "logo" : "bili_icon.png",
    "url" : "https://space.bilibili.com/8103",
  },
  {
    "name" : "donate",
    "logo" : "donate.svg",
    "url" : "/donate/",
  },
];

import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
const route = useRoute();

function openUrl(url) {
  if (url.startsWith('http')) {
    window.open(url, '_blank').focus();
  } else {
    router.push(url);
  }
}
</script>

<template>
  <div>
    <p class="text-h4 text-center text-medium-emphasis">{{ $t('site_title') }}</p>
    <div id="social-links" class="d-flex justify-center mt-3">
      <div v-for="link in social_links" class="mr-3">
        <a :href="link.url" target="_blank" class="d-flex align-center">
        <img :src="`images/logos/${link.logo}`" />{{ $t(link.name) }}</a>
      </div>
    </div>
  </div>

  <hr>

  <div v-for="project in projects" class="mt-5">
    <div class="d-flex justify-center align-center">
      <img :src="`/images/logos/${project.section_logo}`" class="section-title-img"/>
      <div class="text-h4">{{ $t(project.section_name) }}</div>
    </div>

    <div class="d-flex">
      <button v-for="item in project.items" @click="openUrl(item.item_url)" class="flex-1-0 flex-sm-1-1-100">
        <div class="">
          <img :src="`/images/logos/${item.item_logo}`" class="item-img"/>
          <div class="">{{ $t(item.item_name) }}</div>
        </div>
        <p class="">{{ $t(item.item_description) }}</p>
      </button>
    </div>
  </div>

</template>

<style scoped>
#social-links img {
  height: 30px;
}

.section-title-img {
  height: 60px
}

.item-img {
  height: 40px;
}
</style>