<template>
  <div class="card-order">
    <span class="card-order-name">{{name}}</span>
    <span class="card-order-time">{{time}}</span>
    <p class="card-order-title">{{title}}</p>
    <span class="card-order-status">{{status}}</span>
    <span class="card-order-today">{{today}} <span class="circle"></span></span>
  </div>
</template>

<script>
export default {
  props: ['name', 'time', 'title', 'status', 'today']
}
</script>
