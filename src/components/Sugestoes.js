import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const sugestoes = [
        {
            usuario: "bad.vibes.memes",
            imagemUsuario: "bad.vibes.memes"
        },
        {
            usuario: "chibirdart",
            imagemUsuario: "chibirdart"
        },
        {
            usuario: "razoesparaacreditar",
            imagemUsuario: "razoesparaacreditar"
        },
        {
            usuario: "adorable_animals",
            imagemUsuario: "adorable_animals"
        },
        {
            usuario: "smallcutecats",
            imagemUsuario: "smallcutecats"
        }
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map(sugestao => <Sugestao
                imagemUsuario={sugestao.usuario}
                usuario={sugestao.imagemUsuario}
            />)}
        </div>
    );
}