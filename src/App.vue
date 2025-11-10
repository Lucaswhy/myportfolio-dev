<template>
  <div id="app">
    <Header v-if="currentLanguage === 'pt'"></Header>
    <HeaderEn v-if="currentLanguage === 'en'" />
    <div style="min-height: 80vh">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/header/header.vue";
import HeaderEn from "./components/header-en/header-en.vue";
import Footer from "./components/footer/footer.vue";

const route = useRoute();
const currentLanguage = ref("pt");

watch(
  () => route.path,
  (path) => {
    currentLanguage.value = path.includes("-en") ? "en" : "pt";
  },
  { immediate: true },
);
</script>
