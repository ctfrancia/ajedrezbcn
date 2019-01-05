<template>
  <vue-datepicker-local v-model="time" clearable/>
</template>

<script>
import VueDatepickerLocal from 'vue-datepicker-local'

export default {
  name: 'datePicker',
  components: {
    VueDatepickerLocal
  },
  data () {
    return {
      time: new Date()
    }
  }
}
</script>