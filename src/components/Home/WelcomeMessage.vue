<template>
  <div>
    <h3>Hello {{ name }} from my Vue.js page, built with Webpack 4!</h3>
  </div>
</template>

<script>
import { add } from '@mc.gl/mytest'
import { add1, objectAssignFun } from '../../../modules/test-connect/src/index'
export default {
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
