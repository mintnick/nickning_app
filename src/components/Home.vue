<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { url_target } from '../assets/utils'

const tags = [
  {
    "name": "eve-online",
    "logo": "eve_online.png"
  },
  {
    "name": "chrome",
    "logo": "chrome-extensions.png",
  }
]

const projects = [
  {
    "name": "eve-at-draft",
    "logo": "atdraft_logo_red.png",
    "url": "https://nickning.app/atdraft/",
    "description": "eve-at-draft-desc",
    "tags": ["eve-online"]
  },
  {
    "name": "esm",
    "logo": "esm_logo.png",
    "url": "/esm/",
    "description": "esm-desc",
    "tags": ["eve-online"]
  },
  {
    "name": "campaigns",
    "logo": "campaigns_logo.svg",
    "url": "https://nickning.app/campaigns/",
    "description": "campaigns-desc",
    "tags": ["eve-online"]
  },
  // {
  //   "name": "evehu",
  //   "logo": "evehu_logo.svg",
  //   "url": "https://nickning.app/evehu/",
  //   "description": "evehu-desc",
  // }

  {
    "name": "xyzdl",
    "logo": "xyzdl_logo.png",
    "url": "/xyzdl/",
    "description": "xyzdl-desc",
    "tags": ["chrome"]
  }
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

// const router = useRouter();
// const route = useRoute();

// function openUrl(url) {
//   if (url.startsWith('http')) {
//     window.open(url, '_blank').focus();
//   } else {
//     router.push(url);
//   }
// }

const { name } = useDisplay();
const col = computed(() => {
  if (name.value == 'xs') return 12;
  return 6;
});
</script>

<template>
  <div>
    <p class="text-h4 text-center text-medium-emphasis">{{ $t('site_title') }}</p>
    <div id="social-links" class="d-flex justify-center mt-3">
      <div v-for="link in social_links" class="mr-3">
        <a :href="link.url" :target="url_target(link.url)" class="d-flex align-center">
        <img :src="`images/logos/${link.logo}`" class="d-none d-sm-flex mr-1" />{{ $t(link.name) }}</a>
      </div>
    </div>
  </div>

  <hr>

  <div v-for="tag in tags">
    <div class="d-flex justify-center align-center mb-3">
      <img :src="`/images/logos/${tag.logo}`" class="section-title-img"/>
      <div class="text-h4">{{ $t(tag.name) }}</div>
    </div>

    <div class="d-flex flex-wrap">
      <v-col :cols="col" v-for="project in projects.filter(p => p.tags.includes(tag.name))">
        <v-card variant="elevated" hover :href="project.url" :target="url_target(project.url)" class="item pa-3 h-100">
          <div class="d-flex justify-center align-center font-weight-bold mb-3">
            <img :src="`/images/logos/${project.logo}`" class="item-img mr-3"/>
            <div class="">{{ $t(project.name) }}</div>
          </div>
          <p class="">{{ $t(project.description) }}</p>
        </v-card>
      </v-col>
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

.item {
  cursor: pointer;
}

.item-img {
  height: 40px;
}
</style>