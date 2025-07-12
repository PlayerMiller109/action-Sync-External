const fs = require('fs')
const LZString = require('lz-string')

const cnPath = 'gist/zh-cn.ts'
const jsPath = 'sync/main.js'

const cont = fs.readFileSync(cnPath, 'utf8')
const compressed = LZString.compressToBase64(cont)
let mainJs = fs.readFileSync(jsPath, 'utf8')
mainJs = mainJs.replace(
  /const PLUGIN_LANGUAGES\s*=\s*(\{.*)/,
  (m, p1)=> m.replace(p1, `{"zh-cn": "${compressed}"};`)
)
fs.writeFileSync(jsPath, mainJs)