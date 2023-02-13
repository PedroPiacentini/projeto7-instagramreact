
export default function Usuario(props) {


    return (
        <div class="usuario">
            <img onClick={props.funcaoImagem} src={props.imagem} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{props.usuario}</strong>
                    <ion-icon onClick={props.funcaoNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}