<template>
  <div :style="{visibility: uiSidebarOrderVisible ? 'visible' : 'hidden'}">
    <div class="sidebar-background" @click="close"/>
    <div class="sidebar-holder">
      <div>
        <span>Имя:</span>
        <input v-model="order.name" type="text" placeholder="Name">
      </div>
      <div>
        <span>Hазвание:</span>
        <input v-model="order.title" type="text" placeholder="Title">
      </div>
      <span>Тип заявки:</span>
      <div v-for="(item, key) in orderTemplate.types" :key="key" class="new-order-type">
        <input
          type="radio"
          name="radio-group"
          :id="'new-order-type-' + key"
          :checked="key==order.type"
          @click="selectType"
        >
        <label :for="'new-order-type-' + key">{{ item }}</label>
      </div>
      <button @click="createOrder">Создать заявку</button>

      <div>
        <span>Название:</span>
        <input v-model="widget.title" type="text" placeholder="Name">
      </div>
      <div>
        <span>Величина:</span>
        <input v-model="widget.count" type="text" placeholder="Count">
      </div>
      <div>
        <span>Значение:</span>
        <input v-model="widget.total" type="text" placeholder="Value">
      </div>
      <button @click="createWidget">Создать виджет</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      order: {
        type: 0,
        name: '',
        title: '',
        time: '11:43',
        status: 'Холодный',
        today: 'Сегодня'
      },
      widget: {
        title: '',
        count: '',
        total: ''
      },
      orderTemplate: {
        name: 'Иван',
        title: 'Лид с формы “Оставить заявку на расчёт стоимости упаковки франшизы”',
        types: [
          'Новые',
          'Квалификация',
          'Перезвонить',
          'Остались возражения',
          'Оплатили'
        ]
      },
      widgetTemplate: {
        title: 'Возврат',
        count: '(14)',
        total: '-287,000'
      }
    }
  },
  methods: {
    close () {
      this.$store.commit('uiSidebarOrderVisible', false)
    },
    selectType (ev) {
      this.order.type = ev.target.id.slice(15)
    },
    createOrder () {
      this.$store.dispatch('createOrder', this.order)
      this.close()
      this.cleanFroms(true)
    },
    createWidget () {
      this.$store.dispatch('createWidget', this.widget)
      this.close()
      this.cleanFroms(true)
    },
    cleanFroms (flag) {
      this.order.name = this.orderTemplate.name
      this.order.title = this.orderTemplate.title
      this.widget.total = this.widgetTemplate.total
      this.widget.count = this.widgetTemplate.count
      this.widget.title = this.widgetTemplate.title
      if (flag && this.$route.name !== 'Home') {
        this.$router.push('/')
      }
    }
  },
  computed: {
    uiSidebarOrderVisible () {
      return this.$store.state.uiSidebarOrderVisible
    }
  },
  created: function () {
    this.cleanFroms()
  }
}
</script>
