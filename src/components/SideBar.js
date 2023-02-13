import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";
import React from "react";

export default function SideBar() {

    const [nomeUsuario, setNome] = React.useState("teste")
    const [imagemUsuario, setImagem] = React.useState("assets/img/barked.svg")
    function escolherNome() {
        const aux = nomeUsuario;
        const novoNome = prompt("Digite seu nome de usuario");
        return (novoNome ? novoNome : aux)
    }
    function escolherImagem() {
        const aux = imagemUsuario;
        const novoNome = prompt("Adicione um link");
        return (novoNome ? novoNome : aux)
    }

    return (
        <div class="sidebar">
            <Usuario usuario={nomeUsuario} imagem={imagemUsuario} funcaoNome={() => setNome(escolherNome)} funcaoImagem={() => setImagem(escolherImagem)} />
            <Sugestoes />
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}   