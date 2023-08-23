import http from 'http';
import express from 'express';
import autenticar from './security/autenticacao';
import session from 'express-session';
import rotaLogin from './rotas/rotaLogin';

const hostname = 'localhost';
//em desenvolvimento 
//const porta = 3000;

//no servidor 
const porta = 3207

const app = express();
app.use(session);
app.use(session({
    secret: 'Minh4ChAveS3crEt4',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 30
    }

}));
// disponibilizar pasta public para os usuários
app.use(express.static('./public'));
app.use('/login',rotaLogin)
app.use(autenticar, express.static('./private'));
const servidor = http.createServer(app);

servidor.listen(porta, hostname, () => {
    console.log("Servidor rodando na " + hostname + ":" + porta);
});
