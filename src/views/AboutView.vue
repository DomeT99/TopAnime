<template>
  <div class="txt-center container">
    <hr>
    <Banner :titleBanner="'We have come to the end!'"></Banner>
    <hr>
    <div class="columns">
      <div class="column is-2"></div>
      <div class="column is-mobile is-fullwidth">
        <Message>
          <p class="f-size-20">I hope you enjoyed the experience, follow me on my social networks and visit my website.
            For anything
            do not
            hesitate to contact me!
          </p>
        </Message>
      </div>
      <div class="column is-2"></div>
    </div>
    <div class="columns">
      <div class="column is-4"></div>
      <div class="column is-mobile is-4">
        <Message>
          <div class="columns">
            <div class="column is-mobile" :key="icon" v-for="icon in iconsButton">
              <IconSocial :linkSocial="icon.link" :classIcon="icon.class" />
            </div>
          </div>
        </Message>
      </div>
      <div class="column is-2"></div>
    </div>
  </div>
</template>

<script>
import Message from "../components/AboutViews/MessageAbout.vue"
import Banner from "../components/Home/HomeBanner.vue"
import IconSocial from "../components/AboutViews/IconSocial.vue"
export default {
  components: { Message, Banner, IconSocial },
  setup() {
    return {
      iconsButton: [{
        class: "fa-brands fa-instagram",
        link: "https://www.instagram.com/dome_t99/"
      }, {
        class: "fa-brands fa-github",
        link: "https://github.com/DomeT99"
      }, {
        class: "fa-brands fa-linkedin",
        link: "https://www.linkedin.com/in/domenico-tenace-982ba51ab/"
      }, {
        class: "fa-brands fa-facebook",
        link: "https://www.facebook.com/domenico.tenace/"
      }]
    }

  }
}
</script>
