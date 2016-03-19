If you run on linux change package.json to: </br>
[...]</br>
  "start":"export NODE_ENV=production && nodemon ./bin/www",</br>
  "test": "export NODE_ENV=development && nodemon ./bin/www"</br>
[...]</br>
</br>
On Windows set it to:</br>
[...]</br>
  "start":"set NODE_ENV=production && nodemon ./bin/www",</br>
  "test": "set_ENV=development && nodemon ./bin/www"</br>
[...]</br>
