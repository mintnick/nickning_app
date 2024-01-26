<script setup>
import { change_favicon } from './../assets/utils'
const url_chrome = 'https://chromewebstore.google.com/detail/%E5%B0%8F%E5%AE%87%E5%AE%99%E4%B8%8B%E8%BD%BD%E5%8A%A9%E6%89%8B/dflnffddmglhmnlnhlpoiccomjokgnnf';
const url_baidu = 'https://pan.baidu.com/s/1nVGrVbLj4HuERa6d3We1hA?pwd=25tb';

document.title = "小宇宙下载助手";
change_favicon('/images/logos/xyzdl_logo.png');
</script>

<template>
  <div class="text-grey-darken-3">
    <h1 class="text-center">小宇宙下载助手</h1>

    <h2>安装</h2>
    <ul>
      <li><a :href="url_chrome" class="highlight">Chrome 应用商店</a></li>
      <li>手动安装：
        <ol>
          <li>下载 CRX 文件：<a :href="url_baidu" class="highlight">百度网盘</a></li>
          <li>在 Chrome 中，打开右上角选项 - 扩展程序 - 管理扩展程序</li>
          <li>在扩展程序页面，右上角，打开“开发者模式（Developer Mode）”</li>
          <li>把下载的 CRX 文件，直接拖拽到这个页面，提示是否添加插件，确定</li>
        </ol>
      </li>
    </ul>

    <h2>使用</h2>
    <ol>
      <li>在小宇宙 App 中打开节目</li>
      <li>右上角分享按钮 - “复制链接”</li>
      <li>通过 微信传输/ AirDrop /浏览器跨设备同步 等方式中的一种，在电脑端的 Chrome 上打开这个链接</li>
      <li>播客 Logo 正上方，会多出一个“下载音频”按钮</li>
    </ol>

    <h2><a href="/donate/" class="highlight">捐赠支持</a></h2>

    <div class="d-flex justify-center">
      <img src="/images/screenshots/xyzdl.png" class="screenshot"/>
    </div>
  </div>
</template>

<style scoped>
</style>