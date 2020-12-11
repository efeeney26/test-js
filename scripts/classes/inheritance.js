'use strict'

import { Clock } from './basics.js'

class ExtendedClock extends Clock {
  precision
  constructor(template, precision = 1000) {
    super(template)
    this.precision = precision
  }

  start () {
    this.timer = setInterval(() => console.log(this._time), this.precision)
  }
}

export const showInheritanceClassRes = () => {
  const extendedClock = new ExtendedClock({template: 'h:m:s'})
  //extendedClock.start()
  //setTimeout(() => extendedClock.stop(), 5000)
}
