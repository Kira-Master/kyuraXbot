const googleImage = require('g-i-s')
const moment= require('moment-timezone')
const fs  = require('fs-extra')
const path = require('path')
const yargs  = require('yargs/yargs')
const yts= require( 'yt-search')
const fetch  = require('node-fetch') 
const ggs  = require('google-it') 
const axios  = require('axios')
const request  = require('request')
const util = require('util')
const ffmpeg= require('fluent-ffmpeg')
const speed  = require('performance-now')
const hx= require('hx-api') 
const os = require('os')
const Cfonts = require('cfonts')
const {
 spawn,
exec,
execSync 
} = require('child_process')
const { 
 color,
  bgcolor 
} = require('./color')

exports.Functions = class Functions {
constructor() {
this.color = color
this.bgcolor = bgcolor
this.spawn = spawn
this.Cfonts = Cfonts
this.os = os
this.path = path
this.exec = exec
this.speed = speed
this.util = util
this.ffmpeg = ffmpeg
this.request = request
this.axios = axios
this.ggs = ggs
this.fetch = fetch
this.yts = yts
this.yargs = yargs
this.path = path
this.fs = fs
this.moment = moment
}

async reply(text, m) {
m.reply(text)
}

 start(file = '.') {
  let args = [this.path.join(__dirname, file), ...process.argv.slice(2)]
  this.Cfonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = this.spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    console.error('Exited with code:', code)
    if (code === 0) return
    this.fs.watchFile(args[0], () => {
      this.fs.unwatchFile(args[0])
    })
  })
  // console.log(p)
}
}
