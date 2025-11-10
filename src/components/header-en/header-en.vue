<template>
  <div>
    <div class="container-fluid">
      <h1 class="menu__logo">Lucas Herculano</h1>
      <div class="box__hamburger" @click="isOpened = !isOpened">
        <div style="margin-top: 0"></div>
        <div></div>
        <div></div>
      </div>
      <nav :style="isOpened == false ? '' : 'display:flex;'" class="menu__item">
        <router-link to="/home-en" class="nav-link">Home</router-link>
        <router-link to="/sobre-mim-en" class="nav-link">About Me</router-link>
        <router-link to="/habilidade-en" class="nav-link">Skills</router-link>
        <router-link to="/projeto-en" class="nav-link">Projects</router-link>
        <router-link to="/contato-en" class="nav-link">Contact</router-link>
        <div @click="isDropped = !isDropped">
          <div
            class="menu__arrow"
            :style="isDropped == false ? '' : 'transform:rotate(180deg)'"
          ></div>
          <img src="@/assets/united-states.jpg" />
          <a href="./">
            <transition name="fade">
              <div v-if="isDropped" class="menu--drop">
                <img src="@/assets/brazil.jpg" />
              </div>
            </transition>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isDropped = ref(false);
const isOpened = ref(false);
</script>

<style src="../header/style.scss" lang="scss" scoped></style>
