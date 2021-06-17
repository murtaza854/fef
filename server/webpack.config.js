const path = require('path');

module.exports = {
    watchOptions: {
        ignored: [
            path.resolve(__dirname, '../../client/public/images') // image folder path
        ]
    }
  }