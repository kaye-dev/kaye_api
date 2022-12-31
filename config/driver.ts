import net from 'net'
export type PostgresConnectionOptions = {
  client: 'postgres'
  connection: {
    host: string // db host
    database: string // db name
    username: string // db username
    password: string // db password
  }
}
const n = new net.Socket()
n.connect(5439, 'xxx')
