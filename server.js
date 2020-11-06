const http = require ('http');
const app = require('./back-end/app');

const porta = process.env.PORT||8000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(porta)


