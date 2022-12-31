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

call(5439, '127.0.0.1')

/**  FYI
 * Node.js で TCP/IP クライアントを作る
 * http://dotnsf.blog.jp/archives/1070761196.html
 */
