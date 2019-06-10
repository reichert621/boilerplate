const path = require('path');

module.exports = {
  public: path.join(__dirname, '../client/build'),
  port: process.env.PORT || 3000
};
