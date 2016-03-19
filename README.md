If you run on linux change package.json to:
[...]
  "start":"export NODE_ENV=production && nodemon ./bin/www",
  "test": "export NODE_ENV=development && nodemon ./bin/www"
[...]

On Windows set it to:
[...]
  "start":"set NODE_ENV=production && nodemon ./bin/www",
  "test": "set_ENV=development && nodemon ./bin/www"
[...]
