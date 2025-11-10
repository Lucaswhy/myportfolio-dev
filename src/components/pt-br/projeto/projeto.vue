<template>
  <div class="container mt-4">
    <h2>Projetos</h2>

    <div class="div__text">
      <span
        >Assim como todo meu portfólio em Vue.js, aqui estão alguns dos projetos
        no quais eu trabalhei em grande parte, e sua descrição dele, contendo um
        pouco da tecnologia usada e alguns exemplos em Deploy, passe o mouse
        sobre cada projeto.
      </span>
    </div>

    <div class="div__main">
      <div class="div__item">
        <img src="@/assets/projects/detail-sales-cut.jpg" />
        <div class="div__legenda">
          <span>E-commerce em .NET Core + EF</span>
        </div>
        <div class="div__hover">
          <p>Sales Web Mvc</p>
          <p>
            E-commerce feito todo com C# apenas para aprendizado com filtragem,
            paginação, ordenação por preço, etc.
          </p>
          <span
            ><a target="_blank" href="https://github.com/Lucaswhy/SalesWebMvc"
              >Disponível no meu Github!
              <i class="bi bi-box-arrow-up-right"></i></a
          ></span>
        </div>
      </div>

      <div class="div__item">
        <img src="@/assets/projects/stocks-stocktrader-cut.jpg" />
        <div class="div__legenda">
          <span>Portfólio de ações com Vuex e Vue-route</span>
        </div>
        <div style="background-color: MediumSlateBlue" class="div__hover">
          <p>Stocktrader</p>
          <p>
            Um projeto de estudo com aprendizado no Vuex servindo como um
            portfólio de ações. Está integrado com o firebase para recarregar o
            estado.
          </p>
          <span
            ><a target="_blank" href="https://keen-knuth-d2164c.netlify.app/"
              >Dê uma olhada! <i class="bi bi-box-arrow-up-right"></i></a
          ></span>
        </div>
      </div>

      <div class="div__item">
        <img src="@/assets/projects/tg-relatorio-cut.jpg" />
        <div class="div__legenda">
          <span>Sistema de contas feito todo em Node.js</span>
        </div>
        <div style="background-color: green" class="div__hover">
          <p>Hydrochorus</p>
          <p>
            Projeto do TCC da minha faculdade aonde utilizei Node.js para fazer
            o back-end inteiro, foi feito com um colega, ajudei um pouco no
            front-end também. Com MongoDb no banco, tem toda uma estrutura de
            Crud, relações, filtragem, relatório, etc.
          </p>
          <span
            ><a target="_blank" href=""
              >Dê uma olhada! <i class="bi bi-box-arrow-up-right"></i></a
          ></span>
        </div>
      </div>

      <div class="div__item">
        <img src="@/assets/projects/findware-login-cut.jpg" />
        <div class="div__legenda">
          <span>E-commerce com Node.js, MySQL e Vue.js</span>
        </div>
        <div style="background-color: purple" class="div__hover">
          <p>Findware</p>
          <p>
            Projeto em desenvolvimento, um e-commerce com banco de dados
            relacional (MySQL) onde estou fazendo todo o back-end e há
            funcionalidades de integração com OAuth 2.0 para login/cadastro com
            Facebook e Google. Também há uma área administrativa feita no
            back-end.
          </p>
          <span
            ><a href=""
              >Projeto ainda não lançado!
              <i class="bi bi-box-arrow-up-right"></i></a
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss" scoped></style>
