const path = require('path');

var pageConfig = {
  resolve : {
    alias: {

      // module aliases
      'send-icon'          : path.join(__dirname, './src/client/js/components/send-icon.js'),
      'client-msg'          : path.join(__dirname, './src/client/js/components/client-msg.js'),
      'server-msg'          : path.join(__dirname, './src/client/js/components/server-msg.js')
    }
  }
}

var mainJs = Object.assign({}, pageConfig, {
  mode: "development",
  entry: [
    "./src/client/js/main.js",
  ],
  output: {
    filename: "./public/js/main.js"
  }
})


module.exports = [
  mainJs
]
