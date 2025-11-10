<template>
  <div class="container mt-4">
    <h2>Skills</h2>

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
            Vue.js (with Vuex)
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
              >I studied Vue.js for a long time, and worked in projects with
              him, I know how to utilize very well, I costume to use vuex to
              pages with states of data, and vue-route to single-pages. Also, I
              can use v-on, v-bind, filtering, the basic of vue in general. I
              have experience and I can do any project with him.</span
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
              >Experiences with various projects, in addition courses, I learned
              to use CSS3 and eventually learned Sass, like this site the two of
              them was used. I know how to use them with anything, position,
              flexbox, animations, and Sass to minify code in addition to be
              more legible to herance.</span
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
              >I study node.js since my university, was the technology I used to
              my TCC, and i realized how much I love node.js to back-end, i like
              so much Javascript and to use him freely with Node.js. I know how
              to utilize Express.js with another NPMs like Sequelize to SQL, or
              Mongoose to MongoDB(noSQL), or anything that can be
              necessary.</span
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
            >I did a course with Entity Framework and .NET Core where I
            developed an e-commerce(by my self), adding things like, pagination,
            filtering, CRUD, etc. For being a technology in my work space, I
            learned somethings off side too, and for that I can use very
            well.</span
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
            >Working with QA, i learned how to use Selenium with C# and in the
            IDE extension tool, which I use to make automation tests and help me
            to verify a task, discover a new scenario, or register new
            repetitive content to some occasions. Credits to Diego Molina for
            the logo.</span
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
            >I know how to utilize database SQL for applications, like the
            MySQL, integrating with any back-end. I already developed
            applications that was necessary to use procs, functions, I can use
            without any problem.</span
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
            >I can use NoSQL databases without any problem, my TCC was done in
            MongoDB where I was realized that is easily and practical, i can
            create any system with NoSQL databases.</span
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
          React (with Redux)
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
            >Studying i learned to use in front-end React too, i know how to use
            hooks and Redux normally, it's the technology used in my current
            job. I work with React in Typescript too, although in my opinion
            React without Typescript is the best way to use it.</span
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
              >I studied too many Typescript because i know that was important
              to techonologys that works with Javascript, and i learned how to
              use it. I can use it normally, i like how the project structure
              stay like objects oriented, and can be define types and
              interfaces. Actually, i work in my current job with Typescript
              integrated to Node and NestJS.</span
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
              >In my current job of back-end developer, i was introducted to
              NestJS framwork to use it in Express place, which made me learn
              about the technology and start to use it, i see that many things
              looks very interesting and started to use it in my daily life, i
              like the way that many things can be more easily in NestJS. The
              Prisma framework helps a lot in date manipulation.</span
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
              >I did a course about Node with TypeORM and was when i learned how
              to use it to do Migrations and helps in data manipulations. It one
              of the techonologys that i use in my current work and i have been
              learned a lot.</span
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
              >Derived too from my QA experience, I have a good vision to system
              with quality and experience to final user. Always utilized Scrum
              to reunions with the team. Never had problems with, I’m good with
              sprints and daily.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style
  src="@/components/pt-br/habilidade/style.scss"
  lang="scss"
  scoped
></style>
