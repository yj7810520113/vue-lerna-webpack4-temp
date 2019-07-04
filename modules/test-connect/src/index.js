import { add } from '@mc.gl/mytest'
import Probe, { Log } from 'probe.gl'
import { Bench } from '@probe.gl/bench'
window.Probe = Probe

// Probe.getAppState() {
//   console.log('hhh')
// }
let objectAssign = require('deep-clone')
export function add1(a, b) {
  console.log(add(123, 2))
  return add(a, b)
}
export function objectAssignFun(o) {
  // Probe.__proto__.getAppState = () => {
  //   console.log('1111')
  // }
  const bench = new Bench()
    .group('Utility tests')
    .add('Math.sqrt', () => Math.sqrt(1))

  bench.run()
  console.log(objectAssign, o)
  const log = new Log({ id: 'my-app' })
  log.settings()
  log.log(1, 'Hello world', { once: true })()
  log.log(1, 'Hello world', { once: true })()
  console.log(process)
  return objectAssign(o)
}
