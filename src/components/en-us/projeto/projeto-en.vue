<template>
  <div class="container mt-4">
    <h2>Projects</h2>

    <div class="div__text">
      <span
        >Like all of my portfolio in Vue.js, here are some projects that I
        worked in and his description, talking a little about the technology
        that was used and some Deploys. Mouse over to read.
      </span>
    </div>

    <div class="div__main">
      <div class="div__item">
        <img src="@/assets/projects/detail-sales-cut.jpg" />
        <div class="div__legenda">
          <span>E-commerce in .NET Core + EF</span>
        </div>
        <div class="div__hover">
          <p>Sales Web Mvc</p>
          <p>
            E-commerce did in C# only to learn, has things like, filtering,
            pagination, ordination by price, etc..
          </p>
          <span
            ><a target="_blank" href="https://github.com/Lucaswhy/SalesWebMvc"
              >Check in my Github! <i class="bi bi-box-arrow-up-right"></i></a
          ></span>
        </div>
      </div>

      <div class="div__item">
        <img src="@/assets/projects/stocks-stocktrader-cut.jpg" />
        <div class="div__legenda">
          <span>Portfolio of stocks</span>
        </div>
        <div style="background-color: MediumSlateBlue" class="div__hover">
          <p>Stocktrader</p>
          <p>
            A study project to learn Vuex, is a portfolio of stocks. Is
            integrated with firebase to reload data.
          </p>
          <span
            ><a target="_blank" href="https://keen-knuth-d2164c.netlify.app/"
              >Check out! <i class="bi bi-box-arrow-up-right"></i></a
          ></span>
        </div>
      </div>

      <div class="div__item">
        <img src="@/assets/projects/tg-relatorio-cut.jpg" />
        <div class="div__legenda">
          <span>Accounts Payable system in Node.js</span>
        </div>
        <div style="background-color: green" class="div__hover">
          <p>Hydrochorus</p>
          <p>
            TCC Project from my university, where I utilized Node.js to all
            back-end, I did with a friend, helped a little on the front-end too.
            With MongoDB in the database, have a structure with crud, relations,
            filtering, reports, etc..
          </p>
          <span
            ><a target="_blank" href=""
              >Check out! <i class="bi bi-box-arrow-up-right"></i></a
          ></span>
        </div>
      </div>

      <div class="div__item">
        <img src="@/assets/projects/findware-login-cut.jpg" />
        <div class="div__legenda">
          <span>E-commerce with Node, vue and MySql</span>
        </div>
        <div style="background-color: purple" class="div__hover">
          <p>Findware</p>
          <p>
            Project in development, a e-commerce with database MySQL, I’m doing
            all the back-end and has a integrated login / sign in with Facebook
            and Google. There is a administrative area made by the back-end too.
          </p>
          <span
            ><a href=""
              >Project not released yet!
              <i class="bi bi-box-arrow-up-right"></i></a
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="@/components/pt-br/projeto/style.scss" lang="scss" scoped></style>
