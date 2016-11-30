'use strict'

const device = require('device')

module.exports = function (args, callback) {
  const Seneca = this
  const data = args.data

  Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/queue'})

  Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/antallVarsler'})

  if (data.skjemaUtfyllingStart && data.skjemaUtfyllingStop) {
    const skjemaUtfyllingTime = parseInt(data.skjemaUtfyllingStop, 10) - parseInt(data.skjemaUtfyllingStart, 10)
    Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/skjemaUtfyllingTime', value: skjemaUtfyllingTime})
  }

  if (data.userAgent) {
    const thisDevice = device(data.userAgent)
    const thisDeviceKey = `minelev/${thisDevice.type}`
    Seneca.act({role: 'counter', cmd: 'add', key: thisDeviceKey})
  }

  if (data.schoolId) {
    const skoleId = `minelev/antall${data.schoolId}`
    Seneca.act({role: 'counter', cmd: 'add', key: skoleId})
  }

  if (data.documentCategory) {
    const varselType = `minelev/${data.documentCategory}`
    Seneca.act({role: 'counter', cmd: 'add', key: varselType})
  }

  return callback(null, {success: true, msg: 'Trigger for queue-add executed'})
}
