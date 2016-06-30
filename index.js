const start = require('./server');
const router = require('./router');

start.fire(router.route);
