import { Router, response } from "express";

const rotaLogin=Router();

rotaLogin.get("/",(requisicao, resposta) =>{
    resposta.redirect("/login.html")
})
.post("/",(requisicao,resposta)=>{
   const usuario = requisicao.body.usuario;
   const senha =requisicao.body.senha;

   if(usuario==='Fabia' && senha ==='abc123'){
    requisicao.session.usuarioLogado =true;
    resposta.redirect("/cadastro.html");

   }
   else{
    resposta.send("Falha ao tentar logar.");
   }
})
export default rotaLogin;