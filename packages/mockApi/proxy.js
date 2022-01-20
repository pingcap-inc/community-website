const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.NEXT_PUBLIC_PROXY_PORT || 4001
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const proxyTable = [
  {
    path: '/_asktug',
    config: {
      target: 'https://asktug.com',
      // pathRewrite: {
      //   '^/': '/'
      // },
      changeOrigin: true
    },
  },
]

app.prepare().then(() => {
  const server = express()
  if (dev) {
    proxyTable.forEach(value => server.use(value.path, createProxyMiddleware(value.config)))
  }

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}).catch(err => {
  console.log('Error:::::', err)
})
