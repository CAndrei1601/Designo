<template>
  <div class="head clr-bg-peach clr-cl-white">
    <h1 class="head-title">{{ head[0].title }}</h1>
    <p class="head-text">{{ head[0].text }}</p>
    <button>{{ head[0].button }}</button>
    <img
      src="../assets/home/desktop/phone-final.png"
      alt=""
      class="head-bottom-image"
      width="280"
    />
    <img
      src="../assets/home/desktop/bg-pattern-hero-home.svg"
      alt=""
      class="head-background-img"
      width="640"
      height="640"
    />
  </div>

  <section class="cards-redirect"></section>
</template>
<script>
/* eslint-disable */

export default {
  data() {
    const head = [
      {
        title: 'Award-winning custom designs and digital branding solutions',
        text: 'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services. ',
        button: 'Learn More'
      }
    ]
    const cards = [
      { title: 'Web Design', text: 'VIEW PROJECTS' },
      { title: 'APP DESIGN', text: 'VIEW PROJECTS' },
      { title: 'GRAPHIC DESIGN', text: 'VIEW PROJECTS' }
    ]
    const informations = [
      {
        title: 'PASSIONATE',
        text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions. ',
        image: '../assets/home/desktop/illustration-passionate.svg'
      },
      {
        title: 'RESOURCEFUL',
        text: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs. ',
        image: '../assets/home/desktop/illustration-resourceful.svg'
      },
      {
        title: 'FRIENDLY ',
        text: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide. ',
        image: '../assets/home/desktop/illustration-resourceful.svg'
      }
    ]

    const cardBotom = [
      {
        title: 'Let’s talk about your project',
        text: 'Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow. ',
        button: 'Get in touch'
      }
    ]
    return {
      head,
      cards,
      informations,
      cardBotom
    }
  }
}
</script>
