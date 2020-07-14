<template>
  <div class="header">
    <router-link to="/">
      <button class="title"><span class="logo">P</span><span class="name">Privacy Credits</span></button>
    </router-link>
    <button v-on:click="createOrder" class="active">
      + <span class="name">Создать заявку</span>
    </button>
    <router-link to="/settings">
      <button class="grey-settings">...</button>
    </router-link>
    <router-link to="/support">
      <button class="grey-support">?</button>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    createOrder: function (event) {
      this.$store.commit('uiSidebarOrderVisible', true)
    }
  }
}
</script>
