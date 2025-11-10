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
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/sobre-mim" class="nav-link">Sobre Mim</router-link>
        <router-link to="/habilidade" class="nav-link">Habilidades</router-link>
        <router-link to="/projeto" class="nav-link">Projetos</router-link>
        <router-link to="/contato" class="nav-link">Contato</router-link>
        <div @click="isDropped = !isDropped">
          <div
            class="menu__arrow"
            :style="isDropped == false ? '' : 'transform:rotate(180deg)'"
          ></div>
          <img src="@/assets/brazil.jpg" />
          <a href="./home-en">
            <transition name="fade">
              <div v-if="isDropped" class="menu--drop">
                <img src="@/assets/united-states.jpg" />
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

<style src="./style.scss" lang="scss" scoped></style>
