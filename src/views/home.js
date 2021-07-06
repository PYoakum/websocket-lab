const path = require('path');

homeContent = {

    // html title
    'title' : 'WebSocket Lab',
    // html theme
    'theme' : {
      'color' : '#444'
    },
    // meta tag data
    'meta' : {
      // favicon
      'ico' : 'favicon.ico',
      // open graph
      'og' : {
        'desc'  : 'WebSocket Lab',
        'url'   : '/',
        'title' : 'WebSocket Lab',
        'image' : 'favicon.ico'
      }
    },
    // stylesheets
    'styleSheets' : [
      // default stylesheet
      './css/main.css',
    ],
    'javaScripts' : [
      './js/main.js',
      './socket.io/socket.io.js'
    ]
}


module.exports = (req, res) => {

    res.render('home.pug', homeContent)

}
