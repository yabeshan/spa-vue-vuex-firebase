<template>
  <div>
    <div class="widgets-holder">
      <div class="widgets" v-bind:style="{ width: widgetsTotalWidth }">
        <WidgetStat
          v-for="(item, key) in widgets"
          :key="key"
          :title="item.title"
          :count="item.count"
          :total="item.total"
          ref="allWidgets"
        />
      </div>
    </div>
    <div class="columns-holder">
      <div class="columns" v-bind:style="{ width: columnsTotalWidth }">
        <ColumnOrder
          v-for="(item, key) in orders"
          :key="key"
          :title="titleArr[key]"
          :orders="item"
        />
      </div>
    </div>
    {{ updateView }}
  </div>
</template>

<script>
import { ColumnOrder, WidgetStat } from '../components'
import { mapState } from 'vuex'

export default {
  components: {
    ColumnOrder,
    WidgetStat
  },
  data: () => {
    return {
      widgetsTotalWidth: '100px',
      columnsTotalWidth: '1500px',
      titleArr: [
        'Новые',
        'Квалификация',
        'Перезвонить',
        'Остались возражения',
        'Оплатили'
      ]
    }
  },
  computed: {
    ...mapState(['orders', 'widgets']),
    updateView: function () {
      this.calcWidgetScroller()
      return ''
    }
  },
  updated: function () {
    this.calcWidgetScroller()
  },
  methods: {
    calcWidgetScroller () {
      this.$nextTick(function () {
        const widgets = this.$refs.allWidgets
        if (!widgets || widgets.length === 0) {
          return
        }
        let totalWidth = 0
        widgets.forEach(item => {
          totalWidth += item.$el.getBoundingClientRect().width
        })
        this.widgetsTotalWidth = Math.floor(totalWidth + widgets.length * 11).toString() + 'px'
      })
    }
  }
}
</script>
