var docker = require('docker-remote-api')

var noop = function() {}

var kill = function(id, opts, cb) {
  if (typeof opts === 'function') return kill(id, null, opts)
  if (!opts) opts = {}
  if (!cb) cb = noop

  var request = docker(opts.host, {version:'v1.15'})

  request.post('/containers/'+id+'/stop', {
    wait:opts.wait || 10,
    drain:true,
    body: null
  }, function(err) {
    if (err && err.status === 404) err = null
    if (err) return cb(err)
    cb()
  })
}

module.exports = kill