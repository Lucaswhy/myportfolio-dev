import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/components/pt-br/home/home.vue");
const Sobre = () => import("@/components/pt-br/sobre/sobre.vue");
const Habilidade = () => import("@/components/pt-br/habilidade/habilidade.vue");
const Projeto = () => import("@/components/pt-br/projeto/projeto.vue");
const Contato = () => import("@/components/pt-br/contato/contato.vue");

const HomeEn = () => import("@/components/en-us/home/home-en.vue");
const SobreEn = () => import("@/components/en-us/sobre/sobre-en.vue");
const HabilidadeEn = () =>
  import("@/components/en-us/habilidade/habilidade-en.vue");
const ProjetoEn = () => import("@/components/en-us/projeto/projeto-en.vue");
const ContatoEn = () => import("@/components/en-us/contato/contato-en.vue");

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    path: "/sobre-mim",
    component: Sobre,
  },
  {
    path: "/habilidade",
    component: Habilidade,
  },
  {
    path: "/projeto",
    component: Projeto,
  },
  {
    path: "/contato",
    component: Contato,
  },
  {
    path: "/home-en",
    component: HomeEn,
  },
  {
    path: "/sobre-mim-en",
    component: SobreEn,
  },
  {
    path: "/habilidade-en",
    component: HabilidadeEn,
  },
  {
    path: "/projeto-en",
    component: ProjetoEn,
  },
  {
    path: "/contato-en",
    component: ContatoEn,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
