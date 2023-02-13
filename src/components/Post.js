import React from "react"

export default function Post(props) {
    const [curtidas, setCurtidas] = React.useState(props.quantidadeCurtida);
    const [salvar, setSalvo] = React.useState("bookmark-outline");
    const [like, setLike] = React.useState(["heart-outline", ""]);
    function alterarSalvo() {
        if (salvar === "bookmark-outline") {
            setSalvo("bookmark");
        } else {
            setSalvo("bookmark-outline");
        }
    }
    function alterarLike(modo) {
        if (modo === "imagem") {
            if (like[1] === "") {
                setLike(["heart", "red"]);
                setCurtidas(curtidas + 1);
            }
        } else {
            if (like[1] === "") {
                setLike(["heart", "red"]);
                setCurtidas(curtidas + 1);
            } else {
                setLike(["heart-outline", ""]);
                setCurtidas(curtidas - 1);
            }
        }
    }
    return (
        <div data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={`assets/img/${props.imagemUsuario}.svg`} alt={props.usuario} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" onClick={() => alterarLike("imagem")} src={`assets/img/${props.imagemPost}.svg`} alt={props.imagemPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={alterarLike} name={like[0]} class={like[1]}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={alterarSalvo} name={salvar}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={`assets/img/${props.imagemCurtidoPor}.svg`} alt={props.imagemCurtidoPor} />
                    <div data-test="likes-number" class="texto">
                        Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}