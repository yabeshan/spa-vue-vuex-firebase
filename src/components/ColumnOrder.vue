<template>
  <div>
    <div class="column-header">
      <span class="circle"></span> {{title}}
      <span class="column-header-count">{{orders.length}}</span>
    </div>
    <div class="column-scroller">
      <CardOrder
        v-for="(item, key) in orders"
        :key="key"
        :name="item.name"
        :time="item.time"
        :title="item.title"
        :status="item.status"
        :today="item.today"
      />
    </div>
  </div>
</template>

<script>
import { CardOrder } from './index'

export default {
  props: ['title', 'orders'],
  components: {
    CardOrder
  }
}
</script>
