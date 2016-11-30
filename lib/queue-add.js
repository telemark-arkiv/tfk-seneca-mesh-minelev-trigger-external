'use strict'

const Wreck = require('wreck')

module.exports = function (args, callback) {
  const envs = process.env
  const data = args.data
  const triggerUrl = envs.TFK_SENECA_MINELEV_TRIGGER_EXTERNAL_URL
  const options = {
    json: true,
    payload: {
      action: 'queue-add',
      data: data
    }
  }

  if (triggerUrl) {
    Wreck.post(triggerUrl, options, (error, response, payload) => {
      if (error) {
        return callback(error, null)
      } else {
        console.log(payload)
      }
    })
  } else {
    return callback(new Error('Missing TFK_SENECA_MINELEV_TRIGGER_EXTERNAL_URL'))
  }

  return callback(null, {msg: 'Trigger for queue-add executed'})
}
