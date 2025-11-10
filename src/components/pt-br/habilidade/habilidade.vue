<template>
  <div class="container mt-4">
    <h2>Habilidades</h2>

    <div class="div__main">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item mt-4">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Vue.js (com Vuex)
              <i class="bi bi-arrow-down-square-fill icon__arrow"></i>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
          >
            <div class="accordion-body">
              <span class="span__text"
                >Estudei Vue.js por um bom tempo e realizei projetos com ele,
                sei utilizar muito bem, costumo utilizar muito Vuex para páginas
                com estado de dados e Vue-route para lidar bem com single pages.
                Além de conseguir utilizar v-on, v-bind, filtering, o básico em
                do vue em geral. Tenho experiência e consigo realizar qualquer
                projeto nele.</span
              >
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <div style="background-color: blue" class="box"></div>
              CSS3 + Sass
              <i class="bi bi-arrow-down-square-fill icon__arrow"></i>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
          >
            <div class="accordion-body">
              <span class="span__text"
                >Diversas experiências, além de cursos realizados, eu aprendi a
                mexer com CSS3 e eventuamente aprendi a mexer com o Sass, no
                qual ambos foram utilizados nesse site. Sei lidar com qualquer
                coisa, position, flexbox, animações, e utilizo o Sass para
                minificar além de ficar mais legível a herança.</span
              >
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Node.js + Express.js + RESTful API
              <i class="bi bi-arrow-down-square-fill icon__arrow"></i>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
          >
            <div class="accordion-body">
              <span class="span__text"
                >Estudo Node.js desde a faculdade, onde utilizei para fazer meu
                TCC e descobri como gostava dessa tecnologia para o back-end,
                gosto muito de Javascript e de poder utilizar ele livremente com
                o Node.js. Sei utilizar muito bem o Express.js junto com outros
                npms como Sequelize para SQL ou Mongoose para MongoDB (noSQL),
                ou qualquer outro que seja necessário.</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            .NET Core + EF
            <i class="bi bi-arrow-down-square-fill icon__arrow"></i>
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
        >
          <div class="accordion-body">
            <span class="span__text"
              >Fiz um curso com o Entity Framework e .NET Core onde eu
              desenvolvi um pequeno e-commerce(por mim mesmo), adicionando
              coisas como paginação, filtragem, CRUD, etc. Por ser a tecnologia
              em ambiente de trabalho, eu aprendi algumas coisas por fora
              também, eu consigo lidar muito bem.</span
            >
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Selenium
            <i class="bi bi-arrow-down-square-fill icon__arrow"></i>
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingFive"
        >
          <div class="accordion-body">
            <span class="span__text"
              >Trabalhando como QA eu aprendi mexer com Selenium no C# e também
              utilizando sua ferramenta de extensão IDE, na qual permita que eu
              faça testes automatizados e me ajude na validação de uma tarefa,
              no descobrimento de um novo cenário, ou então no cadastro de
              conteúdo repetido para certas ocasiões.</span
            >
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            MySQL
            <i class="bi bi-arrow-down-square-fill icon__arrow"></i>
          </button>
        </h2>
        <div
          id="collapseSix"
          class="accordion-collapse collapse"
          aria-labelledby="headingSix"
        >
          <div class="accordion-body">
            <span class="span__text"
              >Sei utilizar bancos de dados SQL para aplicações, como o MySQL,
              integrando tranquilamente com qualquer back-end. Já desenvolvi
              aplicações que foram necessário o uso de Procs, functions, e
              consigo utilizar sem nenhum problema.</span
            >
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSeven">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSeven"
            aria-expanded="false"
            aria-controls="collapseSeven"
          >
            NoSQL
            <i class="bi bi-arrow-down-square-fill icon__arrow"></i>
          </button>
        </h2>
        <div
          id="collapseSeven"
          class="accordion-collapse collapse"
          aria-labelledby="headingSeven"
        >
          <div class="accordion-body">
            <span class="span__text"
              >Consigo utilizar databases NoSQL sem problema algum, meu TCC foi
              feito em MongoDB no qual achei bem prático e fácil de utilizar,
              consigo fazer qualquer sistema com NoSQL.</span
            >
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingEight">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseEight"
            aria-expanded="false"
            aria-controls="collapseEight"
          >
            React (com Redux)
            <i class="bi bi-arrow-down-square-fill icon__arrow"></i>
          </button>
        </h2>
        <div
          id="collapseEight"
          class="accordion-collapse collapse"
          aria-labelledby="headingEight"
        >
          <div class="accordion-body">
            <span class="span__text"
              >Estudando, eu aprendi para o front a utilizar React também, sei
              fazer hooks e utilizar o Redux tranquilamente, é a tecnologia
              utilizada no meu trabalho atual. Também trabalho com o React
              integrado ao Typescript, embora em minha opinião o React puro é o
              melhor para utilizá-lo.</span
            >
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingNine">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              Typescript
              <i class="bi bi-arrow-down-square-fill icon__arrow"></i>
            </button>
          </h2>
          <div
            id="collapseNine"
            class="accordion-collapse collapse"
            aria-labelledby="headingNine"
          >
            <div class="accordion-body">
              <span class="span__text"
                >Estudei muito Typescript porque vi que era importante para as
                de mais tecnologias que utilizem Javascript, e aprendi a
                utilizá-lo, sei usar com facilidade, gosto de como a estrutura
                fica mais próxima a uma linguagem orientada a objetos e poder
                definir Tipos e interfaces no typescript. Atualmente, no meu
                trabalho utilizo typescript com node e nest.</span
              >
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTen">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              Node.js + NestJS + Prisma
              <i class="bi bi-arrow-down-square-fill icon__arrow"></i>
            </button>
          </h2>
          <div
            id="collapseTen"
            class="accordion-collapse collapse"
            aria-labelledby="headingTen"
          >
            <div class="accordion-body">
              <span class="span__text"
                >No meu trabalho de back-end fui introduzido ao framework do
                Nest para se utilizar no lugar do Express, na qual fez eu
                aprender sobre a tecnologia e começar a utilizá-la, visto que
                oferece muitas coisas interessantes, utilizo no meu dia a dia e
                gosto a maneira na qual ela facilita o trabalho. O prisma ajuda
                muito também para a manipulação de dados.</span
              >
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingEleven">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEleven"
              aria-expanded="false"
              aria-controls="collapseEleven"
            >
              TypeORM
              <i class="bi bi-arrow-down-square-fill icon__arrow"></i>
            </button>
          </h2>
          <div
            id="collapseEleven"
            class="accordion-collapse collapse"
            aria-labelledby="headingEleven"
          >
            <div class="accordion-body">
              <span class="span__text"
                >Fiz um curso de Node com Typeorm e foi onde eu aprendi a
                utilizar para fazer migrations e ajudar na manipulação dos
                dados, é uma das tecnologias na qual utilizo no meu trabalho
                atual e venho aprendendo bastante sobre.</span
              >
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwelve">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwelve"
              aria-expanded="false"
              aria-controls="collapseTwelve"
            >
              Scrum + QA
              <i class="bi bi-arrow-down-square-fill icon__arrow"></i>
            </button>
          </h2>
          <div
            id="collapseTwelve"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwelve"
          >
            <div class="accordion-body">
              <span class="span__text"
                >Também derivado da minha experiência de QA, tenho uma boa visão
                de um sistema com qualidade e visando sempre a experiência do
                usuário final. Utilizei muito a metodologia Scrum para reuniões
                com o time e sempre foi um sucesso, lido bem com as sprints e as
                dailys sendo bem comunicativo.</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss" scoped></style>
