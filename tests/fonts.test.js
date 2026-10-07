import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'

const read = p => fs.readFileSync(new URL('../' + p, import.meta.url))

test('Caprasimo supplement ships with the site and covers Ő ő Ű ű', () => {
  const font = read('public/fonts/caprasimo-hu.woff2')
  assert.equal(font.toString('ascii', 0, 4), 'wOF2')
  assert.ok(font.length < 10_000)
  assert.ok(fs.existsSync(new URL('../public/fonts/OFL-Caprasimo.txt', import.meta.url)), 'OFL license is included')
  const css = read('src/style.css').toString()
  assert.match(css, /font-family: "Caprasimo";[^}]*url\("\/fonts\/caprasimo-hu\.woff2"\)[^}]*unicode-range: U\+0150-0151, U\+0170-0171/)
  const html = read('index.html').toString()
  assert.match(html, /family=Caprasimo/, 'Google Fonts still serves the rest of Caprasimo')
})
