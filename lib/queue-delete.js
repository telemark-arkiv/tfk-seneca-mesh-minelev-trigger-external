'use strict'

module.exports = function (args, callback) {
  const Seneca = this

  Seneca.act({role: 'counter', cmd: 'subtract', key: 'minelev/queue'})

  return callback(null, {success: true, msg: 'Trigger for queue-delete executed'})
}
