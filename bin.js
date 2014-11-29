#!/usr/bin/env node

var kill = require('./')
var minimist = require('minimist')
var fs = require('fs')

var argv = minimist(process.argv.slice(2), {
  alias: {wait:'w', host:'H'}
})

if (!argv._[0] || argv.help) {
  console.log(fs.readFileSync(__dirname+'/help.txt', 'utf-8'))
  process.exit(1)
}

var loop = function() {
  var id = argv._.shift()
  if (!id) return
  kill(id, argv, function(err) {
    if (!err) return loop()
    console.error('Error: %s', err.message)
    process.exit(2)
  })
}

loop()
