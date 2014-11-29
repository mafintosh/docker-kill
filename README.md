# docker-kill

Kill a docker container

```
npm install docker-kill
```

## Usage

``` js
var kill = require('docker-kill')

kill('9903a01a8629', function(err) {
  console.log('container killed?', !err)
})
```

Per default this sends `SIGTERM` and after 10s if the containers
has not terminated `SIGKILL` is sent. To change the wait time do

``` js
kill('9903a01a8629', {wait:20}, function(err) {
  console.log('container killed?', !err)
})
```

## Command line usage

To install the command line tool do

```
npm install -g docker-kill
docker-kill --help
```

In general to kill a container do

```
docker-kill [id]
```

## License

MIT
