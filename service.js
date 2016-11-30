'use strict'

const Seneca = require('seneca')
const Mesh = require('seneca-mesh')
const Trigger = require('./lib/trigger')
const envs = process.env

const options = {
  seneca: {
    tag: envs.TFK_SENECA_MINELEV_TRIGGER_EXTERNAL_TAG || 'tfk-seneca-minelev-trigger-external'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'role:info, info:queue, msg:add', model: 'observe'},
      {pin: 'role:info, info:queue, msg:delete', model: 'observe'}
    ]
  },
  triggerOptions: {
    tag: envs.TFK_SENECA_MINELEV_TRIGGER_EXTERNAL_TAG || 'tfk-seneca-minelev-trigger-external'
  },
  isolated: {
    host: envs.TFK_SENECA_MINELEV_TRIGGER_EXTERNAL_HOST || 'localhost',
    port: envs.TFK_SENECA_MINELEV_TRIGGER_EXTERNAL_PORT || 8000
  }
}

const Service = Seneca(options.seneca)

if (envs.TFK_SENECA_MINELEV_TRIGGER_EXTERNAL_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(Trigger, options.triggerOptions)
