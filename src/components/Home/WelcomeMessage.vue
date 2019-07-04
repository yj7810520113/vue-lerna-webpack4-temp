<template>
  <div>
    <h3>Hello {{ name }} from my Vue.js page, built with Webpack 4!</h3>
    <Test/>
  </div>
</template>

<script>
import { add } from '@mc.gl/mytest'
import { add1, objectAssignFun } from '../../../modules/test-connect/src/index'
import Test from '../../../modules/vue-test/dist'
// let Test = Vue.extend(require('../../../modules/vue-test/dist'))
// Vue.component('test', require('../../../modules/vue-test/dist').default)
export default {
  components: {
    Test
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  created() {
    console.log(add)
    console.log(add(1, 2))
    console.log(add1(5, 2))
    console.log(objectAssignFun({ b: 1 }))
  }
}
</script>
