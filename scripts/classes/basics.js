'use strict'

export class Clock {
  timer
  constructor({ template }) {
    setInterval(() => {
      let date = new Date()
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;


      this._time = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs)
    } , 1000)
  }

  start () {
    this.timer =  setInterval(() => console.log(this._time), 1000)
  }

  stop () {
    clearInterval(this.timer)
    console.log('clock stopped')
  }
}

export const showBasicRes = () => {
  const clock = new Clock({template: 'h:m:s'})
  //clock.start()
  //setTimeout(() => clock.stop(), 5000)
}