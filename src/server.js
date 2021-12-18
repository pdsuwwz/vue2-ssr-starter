const fs = require('fs')
const Vue = require('vue')
const server = require('express')()

const template = fs.readFileSync('./index.template.html', 'utf-8')

const renderer = require('vue-server-renderer').createRenderer({
  template
})

const context = {
  title: 'vue ssr',
  metas: `
      <meta name="keyword" content="vue,ssr">
      <meta name="description" content="vue srr demo">
    `
}

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `
      <div>
        <div>The visited URL is: {{ url }}</div>
        <div>Hello World</div>
      </div>
    `
  })

  renderer
    .renderToString(app, context, (err, html) => {
      console.log(html)
      if (err){
        res.status(500).end('Internal Server Error')
        return
      }
      res.end(html)
    })
})

const PORT = 8080
server.listen(PORT, () => {
  console.clear()

  const blank1 = ''.padStart(1)
  const blank2 = ''.padStart(2)

  console.log(
    '\n',
    blank1,
    '🚀🚀🚀',
    '\x1b[32m',
    'SSR dev server running at:\n',
    '\x1b[0m'
  )
  console.log(
    blank2,
    `> Local:`,
    '\x1b[36m',
    `http://localhost:${PORT}/\n`,
    '\x1b[0m'
  )
})
