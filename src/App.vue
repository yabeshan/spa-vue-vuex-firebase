<template>
  <div id="app">
    <Header/>
    <router-view/>
    <SidebarOrder />
  </div>
</template>

<script>
import { Header, SidebarOrder } from './components'

export default {
  components: {
    Header,
    SidebarOrder
  }
}
</script>
