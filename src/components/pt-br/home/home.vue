<template>
  <div>
    <div class="container mt-4">
      <div class="div__resume">
        <div class="div--resume">
          <h2 class="mb-4">Lucas Herculano Rodrigues</h2>
          <span
            >26 anos, ensino superior completo, desenvolvedor fullstack júnior,
            adoro trabalhar com Node.js e Vue.js, sempre fazendo cursos para
            desenvolver mais projetos e ampliar minhas habilidades. Tenho como
            objetivo crescer minha carreira como desenvolvedor.</span
          >
          <p>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1zI99pDPv7KyL3-ygGi3ENoIiwybTgFoCLjQeUNYV79Y/edit?usp=sharing"
              ><button class="btn btn__download mt-4">Baixar CV</button></a
            >
          </p>
        </div>
        <div class="div__img">
          <figure>
            <img src="@/assets/lucash.jpg" />
          </figure>
        </div>
      </div>

      <h2>Habilidades</h2>

      <div class="div__habilidade mt-4">
        <div class="div--habilidade">
          <i class="bi bi-lightbulb"></i>
          <nav>
            <li>Sempre trazendo soluções.</li>
            <li>Trabalhando com metodologias ágeis, principalmente Scrum.</li>
            <li>Comunicativo para sempre trazer as melhores ideias!</li>
          </nav>
        </div>
        <div class="div--habilidade">
          <i class="bi bi-laptop"></i>
          <nav>
            <li>HTML, CSS3, Javascript, SASS, Vue, React</li>
            <li>Node.js, .NET core</li>
            <li>mySQL, SQLServer, MongoDB, Postgresql</li>
            <li>Capacidade para aprender utilizar qualquer tecnologia nova.</li>
          </nav>
        </div>
        <div class="div--habilidade">
          <i class="bi bi-journal-check"></i>
          <nav>
            <li>Experiência com testes unitários, de usabilidade, etc..</li>
            <li>Teste automatizados com Selenium.</li>
            <li>Trabalhando atualmente com Jest.</li>
          </nav>
        </div>
        <div class="div--habilidade">
          <i class="bi bi-emoji-smile"></i>
          <i class="bi bi-emoji-smile"></i>
          <nav>
            <li>Experiência com QA focando em trazer o melhor ao usuário</li>
            <li>Sempre participativo em reuniões o usuário.</li>
            <li>Um ótimo colega para trabalho!</li>
          </nav>
        </div>
      </div>

      <h2>Projetos</h2>

      <div class="div__projeto mt-4">
        <div class="div__descricao">
          <span
            >Sempre estou fazendo projetos para utilizar as habilidades que
            aprendo durante meus estudos/cursos, todos eles podem ser
            encontrados no meu GitHub e caso esteja interessado, veja mais na
            página de <a href="./projeto">Projetos</a>.</span
          >
          <p>
            <a target="_blank" href="https://github.com/Lucaswhy"
              ><button class="btn btn__download">
                Lucaswhy <i class="bi bi-github mt-4"></i></button
            ></a>
          </p>
        </div>
        <div class="div__carrossel">
          <div class="div__arrow">
            <transition :name="slide" @after-leave="afterLeave">
              <img v-if="animation" :src="image[position]" alt="" />
            </transition>
            <div
              class="carrossel__left"
              @click="
                slide = 'slideback';
                animation = !animation;
                nextImage(0);
              "
            >
              <i class="bi bi-arrow-left-circle-fill"></i>
            </div>
            <div
              class="carrossel__right"
              @click="
                slide = 'slide';
                animation = !animation;
                nextImage(1);
              "
            >
              <i class="bi bi-arrow-right-circle-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div__contato mt-4">
      <div>
        <h2>Fale comigo!</h2>
        <span>lucas_herculano_2010@hotmail.com</span>
        <p>(11)-961994798</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCarousel } from "@/composables/useCarousel";

const { image, position, animation, slide, nextImage, afterLeave } =
  useCarousel();
</script>

<style src="./style.scss" lang="scss" scoped></style>
