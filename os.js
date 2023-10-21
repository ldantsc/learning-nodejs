const os = require("os")
const log = require("./logger")

setInterval(() => {
    const { version, machine, freemem } = os

    const sys = {
        v: version(),
        m: machine(),
        memory: `${parseInt(freemem() / 1024 / 1024)} MB`
    }
  
    console.table(sys)
    log(`${JSON.stringify(sys)} \n`)

}, 1000)