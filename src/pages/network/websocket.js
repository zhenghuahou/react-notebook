import Highlight from '../../components/highlight';
export default function ArrayFlat() {

  const code = `
  Webscoket是Web浏览器和服务器之间的一种全双工通信协议

  相同点主要有：

  都是基于TCP的应用层协议；
  都使用Request/Response模型进行连接的建立；
  在连接的建立过程中对错误的处理方式相同，在这个阶段WS可能返回和HTTP相同的返回码；
  都可以在网络中传输数据。
  不同之处在于：

  WS使用HTTP来建立连接，但是定义了一系列新的header域，这些域在HTTP中并不会使用；
  WS的连接不能通过中间人来转发，它必须是一个直接连接；
  WS连接建立之后，通信双方都可以在任何时刻向另一方发送数据；
  WS连接建立之后，数据的传输使用帧来传递，不再需要Request消息；
  WS的数据帧有序。

  其他特点包括：
  （1）建立在 TCP 协议之上，服务器端的实现比较容易。
  （2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
  （3）数据格式比较轻量，性能开销小，通信高效。
  （4）可以发送文本，也可以发送二进制数据。
  （5）没有同源限制，客户端可以与任意服务器通信。
  （6）协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。
 
  `
  const code2 = `
  GET /uin=xxxxxxxx&app=xxxxxxxxx&token=XXXXXXXXXXXX HTTP/1.1
  Host: server.example.cn:443
  Connection: Upgrade
  Pragma: no-cache
  Cache-Control: no-cache
  User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36
  Upgrade: websocket
  Sec-WebSocket-Version: 13
  Accept-Encoding: gzip, deflate
  Accept-Language: zh-CN,zh;q=0.9
  Cookie: user_id=XXXXX
  Sec-WebSocket-Key: 1/2hTi/+eNURiekpNI4k5Q==
  Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
  Sec-WebSocket-Protocol: binary, base64
  `

  const code3 = `
  HTTP/1.1 101 Switching Protocols
  Server: WebSockify Python/2.6.6
  Date: Wed, 27 May 2020 03:03:21 GMT
  Upgrade: websocket
  Connection: Upgrade
  Sec-WebSocket-Accept: hXXXXXXXXXXXXXXxGmM=
  Sec-WebSocket-Protocol: binary
  `

  const code4 = `
  FIN，指明Frame是否是一个Message里最后Frame（之前说过一个Message可能又多个Frame组成）；1bit，是否为信息的最后一帧
  RSV1-3，默认是0 (必须是0)，除非有扩展定义了非零值的意义。
  Opcode，这个比较重要，有如下取值是被协议定义的
          0x00 denotes a continuation frame
          0x01 表示一个text frame
          0x02 表示一个binary frame
          0x03 ~~ 0x07 are reserved for further non-control frames,为将来的非控制消息片段保留测操作码
          0x08 表示连接关闭
          0x09 表示 ping (心跳检测相关)
          0x0a 表示 pong (心跳检测相关)
          0x0b ~~ 0x0f are reserved for further control frames,为将来的控制消息片段保留的操作码
  Mask，这个是指明“payload data”是否被计算掩码。这个和后面的Masking-key有关，如果设置为1,掩码键必须放在masking-key区域，客户端发送给服务端的所有消息，此位的值都是1；
  Payload len，数据的长度，
  Masking-key，0或者4bit，只有当MASK设置为1时才有效。，给一个Websocket中掩码的意义
  Payload data，帧真正要发送的数据，可以是任意长度，但尽管理论上帧的大小没有限制，但发送的数据不能太大，否则会导致无法高效利用网络带宽，正如上面所说Websocket提供分片。
  Extension data：扩展数据，如果客户端和服务端没有特殊的约定，那么扩展数据长度始终为0
  Application data：应用数据
  `
  const code5= `
  # 配置Nginx支持webSocket开始
  proxy_set_header Host $http_host;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  `

  const code6 = `
  var ws = new WebSocket("wss://echo.websocket.org");
  // 用于指定连接成功后的回调函数。
  ws.onopen = function(evt) { 
    console.log("Connection open ..."); 
    // 实例对象的send()方法用于向服务器发送数据。
    ws.send("Hello WebSockets!");
  };

  // 实例对象的onmessage属性，用于指定收到服务器数据后的回调函数。
  ws.onmessage = function(evt) {
    console.log( "Received Message: " + evt.data);
    ws.close();
  };

  // 实例对象的onclose属性，用于指定连接关闭后的回调函数。
  ws.onclose = function(evt) {
    console.log("Connection closed.");
  };      
  `

  return (
    <>
      <a href='https://blog.csdn.net/LL845876425/article/details/106393358'>参考网址1</a><br />
      <a href='https://www.ruanyifeng.com/blog/2017/05/websocket.html'>参考网址2</a>
      <hr />
      <p>
      </p>
      <Highlight className="code">
        {code}
      </Highlight>
      <p>
        websocket 通信过程及对应报文分析
      </p>
      <img src='https://img-blog.csdnimg.cn/20200527233222508.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0xMODQ1ODc2NDI1,size_16,color_FFFFFF,t_70' alt=''></img><br/><br/>
      <img src="https://img-blog.csdnimg.cn/20200527233246458.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0xMODQ1ODc2NDI1,size_16,color_FFFFFF,t_70" alt=""></img><br/><br/>
      <img src='https://www.ruanyifeng.com/blogimg/asset/2017/bg2017051503.jpg' alt=''></img>
      <p>
        <b>websocket是基于TCP的一个应用协议，与HTTP协议的关联之处在于websocket的握手数据被HTTP服务器当作HTTP包来处理，主要通过Update request HTTP包建立起连接，之后的通信全部使用websocket自己的协议。</b><br />
        **请求：**TCP连接建立后，客户端发送websocket的握手请求，请求报文头部如下：
      </p>
      <Highlight className="code">
        {code2}
      </Highlight>
      <p>
        第一行为为请求的方法，类型必须为GET，协议版本号必须大于1.1<br />
        Upgrade字段必须包含，值为websocket<br />
        Connection字段必须包含，值为Upgrade<br />
        Sec-WebSocket-Key字段必须包含 ，记录着握手过程中必不可少的键值。<br />
        Sec-WebSocket-Protocol字段必须包含 ，记录着使用的子协议<br />
        Origin（请求头）：Origin用来指明请求的来源，Origin头部主要用于保护Websocket服务器免受非授权的跨域脚本调用Websocket API的请求。也就是不想被没授权的跨域访问与服务器建立连接，服务器可以通过这个字段来判断来源的域并有选择的拒绝。
      </p>
      <p>
        **响应：**服务器接收到请求后，返回状态码为101 Switching Protocols 的响应。
      </p>
      <Highlight className="code">
        {code3}
      </Highlight>
      <p>
        Sec-WebSocket-Accept字段是由握手请求中的Sec-WebSocket-Key字段生层的。<br />
        握手成功后，通信不再使用HTTP协议，而采用WebSocket独立的数据帧。如下图所示，为协议帧格式：
      </p>
      <img src="https://img-blog.csdnimg.cn/20200527233345809.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0xMODQ1ODc2NDI1,size_16,color_FFFFFF,t_70" alt=""></img>
      <Highlight className="code">
        {code4}
      </Highlight>
      <h3>nginx 支持websocket 配置</h3>
      <p>由于http 请求 涉及 反向代理 所以就涉及 nginx 配置需要支持 websocket 需要做一些特殊的配置；</p>
      <Highlight className="code">
        {code5}
      </Highlight>
      <img src="https://img-blog.csdnimg.cn/20200527233424850.png" alt=""></img>
      <hr/>
      <h3>客户端的简单示例</h3>
      <p>
      ws.readyState属性返回实例对象的当前状态，共有四种。<br/>
      CONNECTING：值为0，表示正在连接。<br/>
      OPEN：值为1，表示连接成功，可以通信了。<br/>
      CLOSING：值为2，表示连接正在关闭。<br/>
      CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
      </p>
      <Highlight className="code">
        {code6}
      </Highlight>
    </>
  )
}




