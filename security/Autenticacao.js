export default function autenticar(requisicao,resposta){
    if(requisicao.session.usuarioLogado === true){
        next();
    }
    else{
        resposta.redirect('/login.html')
    }
}