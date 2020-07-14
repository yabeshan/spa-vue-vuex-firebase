<template>
  <div>
    <div class="title left">{{title}}</div>
    <div class="title right">{{count}}</div>
    <div class="total">{{total}}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'count', 'total']
}
</script>
