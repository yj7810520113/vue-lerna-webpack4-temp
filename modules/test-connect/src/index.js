import { add } from '@mc.gl/mytest'
let objectAssign = require('deep-clone')
export function add1(a, b) {
  console.log(add(1, 2))
  return add(a, b)
}
export function objectAssignFun(o) {
  console.log(objectAssign, o)
  return objectAssign(o)
}
