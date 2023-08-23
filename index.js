import http from 'http';
import express from 'express'; // Correção: trocar 'espress' por 'express'

const hostname = 'localhost';
const porta = 3000;
const app = express();
// disponibilizar pasta public para os usuários
app.use(express.static('./public'));

const servidor = http.createServer(app);

servidor.listen(porta, hostname, () => {
    console.log("Servidor escutando em " + hostname + ":" + porta);
});
