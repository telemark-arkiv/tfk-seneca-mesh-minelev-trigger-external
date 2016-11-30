[![Build Status](https://travis-ci.org/telemark/tfk-seneca-mesh-minelev-trigger-external.svg?branch=master)](https://travis-ci.org/telemark/tfk-seneca-mesh-minelev-trigger-external)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-seneca-mesh-minelev-trigger-external
Posts to external service on queue-add and queue-delete

## ENV
**TFK_SENECA_MINELEV_TRIGGER_EXTERNAL_URL** url to post to

## Messages handled
### ```role: info, info: queue, msg: add```
Posts json to external service
```javascript
{
  action: 'queue-add',
  data: {} // received data
}
```

From cli

```
$ curl -d '{"role": "info", "info":"queue", "msg":"add", "data": "Hi there"}' -v http://localhost:8000/act
```

### ```role: info, info: queue, msg: delete```
Posts json to external service
```javascript
{
  action: 'queue-delete',
  data: {} // received data
}
```

From cli

```
$ curl -d '{"role": "info", "info":"queue", "msg":"delete", "data": "Bye bye"}' -v http://localhost:8000/act
```

## Docker
From hub.docker.com

```
$ docker run -d --name tfk-seneca-mesh-minelev-trigger-external telemark/tfk-seneca-mesh-minelev-trigger-external
```

## License
[MIT](LICENSE)