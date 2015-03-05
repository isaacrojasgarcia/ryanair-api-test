# RyanAir application test

This application test uses:
* Yeoman and `generator-gulp-angular`
* Gulp as automatization tool
* Stylus as CSS pre processor
* Jade as HTML template engine
* Angular framework
* Node app as a proxy server to avoid CORS issues when loading data
* Bower and npm as a packages managers
* Bootstrap as CSS Framework


## Angular app specs
* The Angular app is divided into `components` and widgets at the `app` folder
* Uses services to connect with the data source
* Uses `events.js` to handle the data exchange inside the app
* Complementary tools
```
"angucomplete-alt": "~0.0.37",
"angular-native-picker": "~1.0.4",
"moment": "~2.9.0",
"lodash": "~3.3.1"
```


## Installing

```
$ node proxy/server.js
$ npm install
$ gulp serve
```

The result is a :
* Small proxy server at 9002 port
* Web server at http://localhost:3000

## TODOS
- [ ] Add tests
- [ ] Improve the look and feel
- [ ] Error handling
- [ ] Add configuration file to create different stages
