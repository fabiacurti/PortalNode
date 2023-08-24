import express from 'express';
import autenticar from './seguranca/Autenticacao.js';
import session from 'express-session';
import rotaLogin from './rotas/rotaLogin.js';


const host = '0.0.0.0';

const porta = '3207';

const app = express();

app.use(session({
    secret: 'Minh4ChAveS3crEt4',
    resave: true,
    saveUninitialized:false,
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}));

app.use(express.urlencoded({ extended: false}));

app.use(express.static('./public'));
app.use('/login', rotaLogin);

app.use(autenticar, express.static('./private'));

app.listen(porta, host, () =>{
    console.log("Servidor escutando em ", host, porta);
})