If you run on linux change package.json to: \n
[...]\n
  "start":"export NODE_ENV=production && nodemon ./bin/www",\n
  "test": "export NODE_ENV=development && nodemon ./bin/www"\n
[...]\n
\n
On Windows set it to:\n
[...]\n
  "start":"set NODE_ENV=production && nodemon ./bin/www",\n
  "test": "set_ENV=development && nodemon ./bin/www"\n
[...]\n
