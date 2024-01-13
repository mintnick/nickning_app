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

import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
// const route = useRoute();

function openUrl(url) {
  if (url.startsWith('http')) {
    window.open(url, '_blank').focus();
  } else {
    router.push(url);
  }
}
</script>

<template>
  <div id="header">
    <p class="text-h4">{{ $t('site_title') }}</p>
    <div id="social-links">
      <a href="https://space.bilibili.com/8103" target="_blank">
        <img src="/images/logos/github.svg" />GitHub</a>
      <a href="https://nickning.me" target="_blank">
        <img src="/images/logos/blog_logo.png" />{{ $t("blog") }}</a>
      <a href="https://douban.com/people/MintNick" target="_blank">
        <img src="/images/logos/douban_logo.png" />{{ $t("douban") }}</a>
      <a href="https://space.bilibili.com/8103" target="_blank">
        <img src="/images/logos/bili_icon.png" />{{ $t("bili") }}</a>
      <a href="/donate/">
        <img src="/images/logos/donate.svg" />{{ $t("donate") }}</a>
    </div>
  </div>
  <hr>

  <div v-for="project in projects">
    <div class="row flex-center q-my-md">
      <img :src="`/images/logos/${project.section_logo}`" class="section-title-img"/>
      <div class="text-h4">{{ $t(project.section_name) }}</div>
    </div>

    <div class="row wrap">
      <button v-for="item in project.items" @click="openUrl(item.item_url)" class="col-sm-12 col-md-6 item">
        <div class="row justify-start items-center no-wrap">
          <img :src="`/images/logos/${item.item_logo}`" class="col-auto item-img q-mr-sm"/>
          <div class="col-auto text-h5">{{ $t(item.item_name) }}</div>
        </div>
        <p class="text-left text-subtitle1">{{ $t(item.item_description) }}</p>
      </button>
    </div>
  </div>

</template>

<style scoped>
#social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 1em;
}

#social-links img{
  height: 30px;
}

#social-links > * {
  display: flex;
  align-items: center;
  gap: 1px;
}

.section-title-img {
  height: 60px;
}

.item {
  background-color: white;
  border-style: solid;
  border-color: #ECEFF1;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
}

.item:hover {
  color: #CE93D8;
}

.item-img {
  height: 40px;
}
</style>