import http, { IncomingMessage, ServerResponse } from 'http'
import tedious from 'tedious'

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.end('OK')

  const config = {
    server: 'localhost',
    authentication: {
      type: 'default',
      options: {
        userName: 'kaye',
        password: '',
      },
    },
    options: {
      encrypt: true,
      database: 'mydb',
    },
  }

  const connection = new tedious.Connection(config)
  console.log('connection start')
  connection.on('connect', function (err) {
    // If no error, then good to proceed.
    err ? console.log('err', err) : console.log('Connected')
  })

  connection.connect()
})

server.listen(4000)
