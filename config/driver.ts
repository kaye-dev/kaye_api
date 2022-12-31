import net from 'net'
import { TlsOptions } from 'tls'

export type PostgresConnectionOptions = {
  client: 'postgres'
  connection: {
    host: string // db host
    database: string // db name
    username: string // db username
    password: string // db password
    ssl: boolean | TlsOptions // object with ssl parameters
  }
}

const call = async (host: number, port: string): Promise<void> => {
  const client = new net.Socket()
  await client.connect(host, port, function () {
    console.log('接続: ' + host + ':' + port)

    // サーバーへメッセージを送信
    client.write('ハロー')
  })

  // サーバーからメッセージを受信したら、その内容を表示する
  client.on('data', function (data) {
    console.log(data)
  })

  // 接続が切断されたら、その旨をメッセージで表示する
  client.on('close', function () {
    console.log('切断')
  })
}

// psql -h localhost -p 5339 -U kaye -d mydb
call(5339, '<your-db-server-name>.postgres.database.azure.com')

/**  FYI
 * Node.js で TCP/IP クライアントを作る
 * http://dotnsf.blog.jp/archives/1070761196.html
 * pg クライアントのインストール
 * https://learn.microsoft.com/ja-jp/azure/postgresql/single-server/connect-nodejs
 */
